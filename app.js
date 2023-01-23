const express = require("express");
const app = express();
const port = 3333;
const cors = require("cors");
const carRoute = require("./src/routes/carRoute");

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/carros", carRoute);

app.listen(port, () => {
  console.log(`Running port: ${port}`);
});
