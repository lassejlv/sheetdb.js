// Description: Export all functions
const { readData } = require("./read");
const { readDataById } = require("./readById");
const { createData } = require("./create");
const { deleteDataById } = require("./deleteById");
const { deleteData } = require("./delete");
const { updateData } = require("./update");

module.exports = {
  readData,
  readDataById,
  createData,
  deleteDataById,
  deleteData,
  updateData,
};
