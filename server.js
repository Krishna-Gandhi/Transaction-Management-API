require("dotenv").config();
const express = require("express");
const dbconnect = require("./dbconnect");
const transactionRoutes = require("./routes/transaction");
const cors = require("cors");
const app = exptress();

dbconnect();

app.use(express.json());
app.use(cors());

app.use("/api", movieRoutes);


const port = process.env.PORT || 8080;
app.listen(port,() => console.log(`Listening on port $(port)...`));

