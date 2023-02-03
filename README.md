# Sheetdb.js

A simple Node.js module for interacting with the SheetDB API

## Getting Started

Go to [sheetdb-js.vercel.app](https://sheetdb-js.vercel.app) to get started.

# Basic Usage

```js
// Import the libary
const { SheetClient } = require("@themrdev/sheetdb.js");

// Setup Client

const sheetDbClient = new SheetClient({
  // The app id from the: https://sheetdb.io/api/v1/<app_id>
  connect: "<app_id>",
});

// On Connect

sheetDbClient.on("connect", (connectionString) => {
  console.log(
    "Connected to the database! Connection String: " + connectionString
  );
});

```
