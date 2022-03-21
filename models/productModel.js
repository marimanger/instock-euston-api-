const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

const readData = () => {
  // Your route is relative to where index.js is
  return JSON.parse(fs.readFileSync("./data/products.json"));
};
const writeData = (myData) => {
  fs.writeFileSync("./data/products.json", JSON.stringify(myData));
};

const getAllData = () => {
  const productsData = readData();
  return productsData;
};
const getIndividual = (currProductId) => {
  const productsData = readData();
  const currProduct = productsData.find(
    (product) => product.id === currProductId
  );
  return currProduct;
};
const createProduct = (productData) => {
  const productsData = readData();
  const newProduct = {
    id: uuidv4(),
    ...productData,
  };
  productsData.push(newProduct);
  writeData(productsData);
  return newProduct;
};

module.exports = {
  getAllData,
  getIndividual,
  createProduct,
};
