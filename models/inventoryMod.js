const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const helper = require("../utils/helpers")

const getAllData = () => {
    const inventoryData = helper.readData("./data/inventories.json");
    return inventoryData;
  };
  const getSomeData = () => {
    const someInventoryData = helper.readData("./data/inventories.json");
    return someInventoryData;
  };

//used in helper function instead
// const readData = () => {
//   // Your route fis relative to where index.js is
//   return JSON.parse(fs.readFileSync("./data/warehouses.json"));
// };
// const writeData = (myData) => {
//   fs.writeFileSync("./data/warehouses.json", JSON.stringify(myData));
// };


module.exports = {
    getAllData,
    getSomeData,
    // getIndividual,
    // createProduct,
  };
  