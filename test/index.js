const { SheetClient } = require("../index");

const sheetDbClient = new SheetClient({
  // Enter ConnectionString APP_ID
  connect: "mfpis1bnqy29i",
  useLogger: true,
});

sheetDbClient.deleteData("1");
