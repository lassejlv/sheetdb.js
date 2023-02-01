const { SheetClient } = require("../index");

const sheetDbClient = new SheetClient({
  // Enter ConnectionString APP_ID
  connect: "mfpis1bnqy29i",
  useLogger: false,
});

const allData = sheetDbClient.readData();

// Getting the data
allData.then((db) => console.log(db)).catch((err) => console.log(err));
