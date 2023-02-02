const { api_endpoint } = require("../Config");

async function createData(data_value, connectionString) {
  // Check if the data is an array
  if (!Array.isArray(data_value)) {
    throw new Error("Data must be an array");
  }

  // If array must contian an id property
  if (!data_value[0].id) {
    throw new Error("Data must contain an id property");
  } else if (data_value[0].id !== "INCREMENT") {
    throw new Error(
      "Data must contain an id property with the value INCREMENT"
    );
  }

  // Make a request to the API
  return fetch(`${api_endpoint}/${connectionString}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
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
