const { SheetClient } = require("../index");

const sheetDbClient = new SheetClient({
  // Enter ConnectionString APP_ID
  connect: "mfpis1bnqy29i",
});

sheetDbClient.createData([{ id: "INCREMENT", name: "username", age: 12 }]);
