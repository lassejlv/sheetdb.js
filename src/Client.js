// The main class for the library
const { api_endpoint } = require("./Config");
const {
  readData,
  readDataById,
  createData,
  deleteDataById,
  deleteData,
  updateData,
} = require("./functions/export");

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

  // Events handler
  on(event, callback) {
    // Check if the event is a string
    if (typeof event !== "string") {
      throw new Error("Event must be a string");
    } else if (!this.options.connect) {
      throw new Error("No connection string provided");
    } else {
      if (event === "connect") {
        // Check user has provided a connection string
        if (this.options.connect) {
          // Run the callback
          let connectionString = `${api_endpoint}/${this.options.connect}`;
          callback(connectionString);
        } else {
          throw new Error("No connection string provided");
        }
      } else if (event === "dataCreate") {
        // When the createData method is called
        // Check when a function is called
        const original = this.createData;
        this.createData = function () {
          // Run the callback
          callback();
          // Run the original function
          return original.apply(this, arguments);
        };
      } else if (event === "dataDelete") {
        // When the deleteData method is called
        // Check when a function is called
        const original = this.deleteData;
        this.deleteData = function () {
          // Run the callback
          callback();
          // Run the original function
          return original.apply(this, arguments);
        };
      } else if (event === "dataUpdate") {
        // When the updateData method is called
        // Check when a function is called
        const original = this.updateData;
        this.updateData = function () {
          // Run the callback
          callback();
          // Run the original function
          return original.apply(this, arguments);
        };
      } else if (event === "dataRead") {
        // When the updateData method is called
        // Check when a function is called
        const original = this.readData;
        this.readData = function () {
          // Run the callback
          callback();
          // Run the original function
          return original.apply(this, arguments);
        };
      } else if (event === "dataReadById") {
        // When the readDataById method is called
        // Check when a function is called
        const original = this.readDataById;
        this.readDataById = function () {
          // Run the callback
          callback();
          // Run the original function
          return original.apply(this, arguments);
        };
      } else {
        throw new Error("Invalid event flag provided");
      }
    }
  }

  // Create Data
  async createData(data_value) {
    // Check user has provided a connection string
    this.checkConnectionString();

    return createData(data_value, this.options.connect);
  }

  // Delete Data By ID
  async deleteDataById(data_id) {
    // Check user has provided a connection string
    this.checkConnectionString();

    return deleteDataById(data_id, this.options.connect);
  }

  async deleteData() {
    // Check user has provided a connection string
    this.checkConnectionString();

    // Run the function
    return deleteData(this.options.connect);
  }

  // Update Data
  async updateData(data_id, data_value) {
    // Check user has provided a connection string
    this.checkConnectionString();

    return updateData(data_id, data_value, this.options.connect);
  }

  // Read Data
  async readData() {
    // Check user has provided a connection string
    this.checkConnectionString();

    // Run the function
    return readData(this.options.connect);
  }

  // Read Data By ID
  async readDataById(data_id) {
    // Check user has provided a connection string
    this.checkConnectionString();

    return readDataById(data_id, this.options.connect);
  }
}

// Export the class
module.exports = {
  SheetClient,
};
