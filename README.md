# sheetdb.js

A simple Node.js module for interacting with the SheetDB API

# Creating the Client

```javascript
const { SheetClient } = require("sheet.js");

const client = new Client({
  // Enter your sheet app_id, fx: https://sheetdb.io/api/v1/<app_id>
  connect: "{app_id}",

  // useLogger (optional) - If you want to use the logger, that logs when you are creating, reading, updating and deleting data.
  useLogger: false,
});
```

### Create Data

Quick example:

```javascript
// Basic Usage
const schema = {
    id: "INCREMENT" // you must use the id property and set it to "INCREMENT" to create a new row
    name: "John Doe",
    age: 20
}

// When you try to create data, the data must be in an array, Otherwise it will throw an error.
const createData = SheetClient.createData([schema, { id: "INCREMENT", name: "Jane Doe", age: 20 } }]);

//  Get return data and catch for errors
createData.then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
});

```

The function will return:

- original (The original link)
- short (The shorted id for the link)
- user (The id of the owner)
- clicks (The number of clicks)
- timeStamp (Such as createdAt and updatedAt)
