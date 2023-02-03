const { api_endpoint } = require("../Config");
const fetch = require("node-fetch");

async function readData(data_limit, connectionString) {
  let limit = data_limit;

  // getting the number inside the data_limit object
  if (typeof limit === "object") {
    limit = Object.values(limit)[0];

    if (typeof limit !== "number") {
      throw new Error("Limit must be a number");
    } else {
      connectionString = `${connectionString}?limit=${limit}`;
    }
  }

  // Make a request to the API
  return fetch(`${api_endpoint}/${connectionString}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
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
  readData,
};
