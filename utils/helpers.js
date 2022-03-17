const fs = require("fs");

const readData = (path) => {
  // Your route is relative to where index.js is
  return JSON.parse(fs.readFileSync(path));
};
const writeData = (path,myData) => {
  fs.writeFileSync(path, JSON.stringify(myData));
};

module.exports ={
   readData,
   writeData,
  }
