const express = require("express");
const BookController=require("../controller/bookController")

const router = express.Router();

router.route("/").get(BookController.GetAllBook)

module.exports = router;
