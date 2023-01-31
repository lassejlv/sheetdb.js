// The main class for the library
const fetch = require("node-fetch");
const { api_endpoint } = require("./Config");

class SheetClient {
  constructor(options) {
    this.options = options;
  }

  // Check ConnectionString
  checkConnectionString() {
    if (!this.options.connect) {
      throw new Error("No connection string provided");
    }
  }

  // Create Data
  async createData(data_value) {
    // Get the current time
    const Time = Date.now();
    // Check user has provided a connection string
    this.checkConnectionString();

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
    fetch(`${api_endpoint}/${this.options.connect}`, {
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
        // Log the data
        console.log("Created Data: ", data_value);
        console.log("Time: ", Date.now() - Time, "ms");
      })
      .catch((error) => {
        throw new Error(error);
      });
  }
}

// Export the class
module.exports = {
  SheetClient,
};
