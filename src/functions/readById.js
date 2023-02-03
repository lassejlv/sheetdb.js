const { api_endpoint } = require("../Config");
const fetch = require("node-fetch");

async function readDataById(data_id, connectionString) {
  // Make a request to the API
  return fetch(`${api_endpoint}/${connectionString}/search?id=${data_id}`, {
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
        // If the response is an emty array return null
        if (data.length === 0) {
          throw new Error("No results found");
        } else {
          return data[0];
        }
      }
    })
    .catch((error) => {
      throw new Error(error);
    });
}

module.exports = {
  readDataById,
};
