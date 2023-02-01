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

  // Use Logger
  useLogger() {
    if (this.options.useLogger) {
      return true;
    } else {
      return false;
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
    return fetch(`${api_endpoint}/${this.options.connect}`, {
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
        if (this.useLogger()) {
          // Log the data
          console.log("Created Data: ", data_value);
          console.log("Time: ", Date.now() - Time, "ms");
        }

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

  // Delete Data
  async deleteData(data_id) {
    // Get the current time
    const Time = Date.now();
    // Check user has provided a connection string
    this.checkConnectionString();

    // Make a request to the API
    return fetch(`${api_endpoint}/${this.options.connect}/id/${data_id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (this.useLogger()) {
          // Log the data
          console.log("Deleted ID: ", data_id);
          console.log("Time: ", Date.now() - Time, "ms");
        }

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

  // Update Data
  async updateData(data_id, data_value) {
    // Get the current time
    const Time = Date.now();
    // Check user has provided a connection string
    this.checkConnectionString();

    // Check if the data is an array
    if (Array.isArray(data_value)) {
      throw new Error("Data must be an object");
    }

    // If array must contian an id property
    if (data_id[0].id) {
      throw new Error(
        "You can't update the id property inside a update request"
      );
    }

    // Make a request to the API
    return fetch(`${api_endpoint}/${this.options.connect}/id/${data_id}`, {
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
        if (this.useLogger()) {
          // Log the data
          console.log("Updated Data: ", data_value);
          console.log("Time: ", Date.now() - Time, "ms");
        }

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

  // Read Data
  async readData() {
    // Get the current time
    const Time = Date.now();
    // Check user has provided a connection string
    this.checkConnectionString();

    // Make a request to the API
    return fetch(`${api_endpoint}/${this.options.connect}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (this.useLogger()) {
          // Log the data
          console.log("Read Data: ", data);
          console.log("Time: ", Date.now() - Time, "ms");
        }

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

  // Read Data By ID
  async readDataById(data_id) {
    // Get the current time
    const Time = Date.now();
    // Check user has provided a connection string
    this.checkConnectionString();

    // Make a request to the API
    return fetch(
      `${api_endpoint}/${this.options.connect}/search?id=${data_id}`,
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
        if (this.useLogger()) {
          // Log the data
          console.log("Read Data: ", data);
          console.log("Time: ", Date.now() - Time, "ms");
        }

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
}

// Export the class
module.exports = {
  SheetClient,
};
