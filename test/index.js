const { SheetClient } = require("../index");

const sheetDbClient = new SheetClient({
  // Enter ConnectionString APP_ID
  connect: "mfpis1bnqy29i",
  useLogger: true,
});

const schema = {
  id: "INCREMENT", // you must use the id property and set it to "INCREMENT" to create a new row
  name: "John Doe",
  age: 20,
};

// When you try to create data, the data must be in an array, Otherwise it will throw an error.
const createData = sheetDbClient.createData([
  schema,
  { id: "INCREMENT", name: "Jane Doe", age: 20 },
]);

//  Get return data and catch for errors
createData
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
