const express = require("express");
const BookRouter = require("../router/bookRouter");

const errorController = require("../controller/errorController");

const app = express();

app.use(express.json());

app.use("/api", BookRouter);

app.use(errorController);
module.exports = app;
