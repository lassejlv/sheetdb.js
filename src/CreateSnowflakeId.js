const crypto = require("crypto");

function createSnowflakeId() {
  const timestamp = new Date().getFullYear();
  const lastTimestamp = timestamp.toString().slice(-2);
  const random = crypto.randomBytes(5).toString("hex");
  return `${lastTimestamp}${random}`;
}

module.exports = {
  createSnowflakeId,
};
