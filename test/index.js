const { SheetClient } = require("../index");

const sheetDbClient = new SheetClient({
  // Enter ConnectionString APP_ID
  connect: "jy2jkcod1f3rz",
});

// onConnect
sheetDbClient.on("connect", (connectionString) => {
  console.log(`Connected to SheetDB at: ${connectionString}`);
});

// onDataCreate
sheetDbClient.on("dataCreate", () => {
  console.log("Data created");
});

// onDataDelete
sheetDbClient.on("dataDelete", () => {
  console.log("Data deleted");
});

// onDataUpdate
sheetDbClient.on("dataUpdate", () => {
  console.log("Data updated");
});

// onDataRead
sheetDbClient.on("dataRead", () => {
  console.log("Data read");
});

// onDataReadById
sheetDbClient.on("dataReadById", () => {
  console.log("Data read by id");
});

// Create Data
// setTimeout(() => {
sheetDbClient.createData([{ name: "lasse", age: 17 }]);
// sheetDbClient.searchData({
//   query: "name",
//   value: "lasse",
// });

(async () => {
  const findLasse = await sheetDbClient.searchData({
    query: "name",
    value: "lasseø",
  });

  console.log(findLasse);
})();
// }, 5000);
