const fs = require("fs");

const readData = (path) => {
  return JSON.parse(fs.readFileSync(path));
};

const writeData = (path, myData) => {
  fs.writeFileSync(path, JSON.stringify(myData), "utf8", (err) => {
    if (err) {
      console.log("writeData error:", err);
    }
  });
};

const findById = (warehouses, id) => {
  return warehouses.some((warehouse) => warehouse.id === id);
};

module.exports = {
  readData,
  writeData,
  findById,
};
