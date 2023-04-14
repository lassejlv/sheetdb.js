const { api_endpoint } = require("../Config");
const fetch = require("node-fetch");
const { createSnowflakeId } = require("../CreateSnowflakeId");

async function createData(
  data_value,
  connectionString,
  bearer_token,
  basic_auth
) {
  // Check if the data is an array
  if (!Array.isArray(data_value)) {
    throw new Error("Data must be an array");
  }

  // If array must contian an id property
  // get the data an add the id
  data_value = data_value.map((data) => {
    if (data.id) {
      throw new Error("Data must not contain an id property");
    } else {
      return {
        ...data,
        id: createSnowflakeId(),
      };
    }
  });

  console.log(basic_auth);

  // Make a request to the API
  return fetch(`${api_endpoint}/${connectionString}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",

      // Add bearer token if the user has provided one
      ...(bearer_token && { Authorization: `Bearer ${bearer_token}` }),
      ...(basic_auth && {
        Authorization: `Basic ${Buffer.from(
          `${basic_auth.username}:${basic_auth.password}`
        ).toString("base64")}`,
      }),

      // Add basic auth if the user has provided one
    },
    body: JSON.stringify({
      data: data_value,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      // Return the data
      if (data.error) {
        throw new Error(data.error);
      } else {
        return data_value;
      }
    })
    .catch((error) => {
      throw new Error(error);
    });
}

module.exports = {
  createData,
};
