const express = require("express");
const cors = require("cors");
const router = express.Router();

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


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
  console.log("HELLO WORLD");
});
