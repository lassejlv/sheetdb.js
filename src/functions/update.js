const { api_endpoint } = require("../Config");
const fetch = require("node-fetch");

async function updateData(data_id, data_value, connectionString) {
  // Check if the data is an array
  if (Array.isArray(data_value)) {
    throw new Error("Data must be an object");
  }

  // If array must contian an id property
  if (data_id[0].id) {
    throw new Error("You can't update the id property inside a update request");
  }

  // Make a request to the API
  return fetch(`${api_endpoint}/${connectionString}/id/${data_id}`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: [data_value],
    }),
  })
    .then((response) => response.json())
    .then((data) => {
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
  updateData,
};
