const { api_endpoint } = require("../Config");
const fetch = require("node-fetch");

async function deleteData(connectionString, bearer_token, basic_auth) {
  // Make a request to the API
  return fetch(`${api_endpoint}/${connectionString}/all`, {
    method: "DELETE",
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
    },
  })
    .then((response) => response.json())
    .then((data) => {
      // Return the data
      if (data.error) {
        throw new Error(data.error);
      } else {
        return data;
      }
    })
    .catch((error) => {
      throw new Error(error);
    });
}

module.exports = {
  deleteData,
};
