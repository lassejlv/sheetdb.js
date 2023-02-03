# Sheetdb.js

A simple Node.js module for interacting with the SheetDB API

## Getting Started

Go to [sheetdb-js.vercel.app](https://sheetdb-js.vercel.app) to get started.

# Basic Usage

```js
const { SheetClient } = require("@themrdev/sheetdb.js");

const sheetDbClient = new SheetClient({
  // The app id from the: https://sheetdb.io/api/v1/<app_id>
  connect: "<app_id>",
});
```
```js
const schema = {
  id: "INCREMENT",
  name: "John Doe",
  age: 20,
};

const user = sheetDbClient.createData([schema]);

// Getting the data
user.then((db) => console.log(db)).catch((err) => console.log(err));
```
