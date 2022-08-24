const express = require("express");
const BookController = require("../controller/bookController");

const router = express.Router();

router.route("/").get(BookController.GetAllBook).post(BookController.PostBook)
router.route("/:id").delete(BookController.deleteBook).get(BookController.getOneBook)

module.exports = router;
