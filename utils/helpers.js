const fs = require("fs");

const readData = (path) => {
  return JSON.parse(fs.readFileSync(path));
};
const writeData = (path, myData) => {
  fs.writeFileSync(path, JSON.stringify(myData));
};

module.exports = {
  readData,
  writeData,
};
