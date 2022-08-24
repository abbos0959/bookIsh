const express = require("express");
const BookRouter = require("../router/bookRouter");
const postBookRouter = require("../router/postBook");
const app = express();

app.use(express.json());

app.use("/api/v1/books", BookRouter);
app.use("/api/v1/add/:isbn", postBookRouter);
module.exports = app;
