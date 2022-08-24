const express = require("express");
const BookRouter = require("../router/bookRouter");

const errorController = require("../controller/errorController");
const AppError = require("../utilities/appError");

const app = express();

app.use(express.json());

app.use("/api", BookRouter);


app.all("*", function (req, res, next) {
    next(new AppError("Bunday page yo`q", 404));
  });

app.use(errorController);
module.exports = app;
