const express = require("express");
const {sequelize, Products} = require("./model/db.connect.js");
const rootRouter = require("./routes/root.router.js");

const cors = require('cors')

const app = express();

const port = 8000;

app.use(cors())

app.use(express.json());

sequelize.sync({alter:true})

app.use("/api",rootRouter);





app.listen(port, async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection database successfully.");
  } catch (error) {
    console.error("Connection database fail.", error);
  }
  console.log("Success");
});
