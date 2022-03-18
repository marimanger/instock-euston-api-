const express = require("express");
const cors = require("cors");
const inventoryRoutes = require("./routes/inventoryRoutes");
const warehouseRoutes = require("./routes/warehouseRoutes");
// const readFile = require("./utils/helpers");
// require("dotenv").config();

const app = express();
const PORT = 8080;

app.use(express.json());

app.use(cors());

app.use(warehouseRoutes);
app.use(inventoryRoutes);

app.get("/", (_req, res) => {
  res.send("Welcome to the Euston InStock Server!");
});

app.listen(PORT, () => {
  console.log(`Euston InStock Server listening at http://localhost:${PORT}`);
});
