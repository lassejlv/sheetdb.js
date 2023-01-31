const { SheetClient } = require("../index");
const prompt = require("prompt-sync")();

const sheetDbClient = new SheetClient({
  // Enter ConnectionString APP_ID
  connect: "mfpis1bnqy29i",
  useLogger: false,
});

// // Simple Project Using SheetDB
// Create Data
// sheetDbClient.createData([
//   {
//     id: "INCREMENT",
//     name: "SheetDB",
//   }]),

// Delete Data
// sheetDbClient.deleteData("1")

// Update Data
// sheetDbClient.updateData("1", { name: "Lasse Is Eine Cool" });

// const name = prompt("Enter your name: ");
// const age = prompt("Enter your age: ");

// if (!name) {
//   console.log("Please enter a name");
// } else if (!age) {
//   console.log("Please enter an age");
// } else {
//   sheetDbClient
//     .createData([
//       {
//         id: "INCREMENT",
//         name: name,
//         age: age,
//       },
//     ])
//     .then((db) => {
//       console.log("You have been added to the database.");
//     });
// }

const deleteUserId = prompt("Enter the id of the user you want to delete: ");

if (!deleteUserId) {
  console.log("Please enter a valid id");
} else {
  sheetDbClient
    .deleteData(deleteUserId)
    .then((db) => {
      console.log("You have been deleted from the database.");
    })
    .catch((err) => {
      console.log("There was an error deleting the user.");
      setTimeout(() => {
        console.log(err.message);
      });
    });
}
