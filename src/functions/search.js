const { api_endpoint } = require("../Config");
const fetch = require("node-fetch");

async function searchData(data_value, connectionString) {
  // Check if the data_value is an object

  if (!data_value.row) {
    new Error("No query provided");
  }
  if (!data_value.value) {
    new Error("No value provided");
  }

  // Make a request to the API
  return fetch(
    `${api_endpoint}/${connectionString}/search_or?${data_value?.row || "id"}=${
      data_value?.value || "1"
    }`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  )
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
  searchData,
};
