const express = require("express");
const BookController = require("../controller/bookController");

const router = express.Router();

router.route("/get/add/:isbn").get(BookController.addBook);
router.route("/post/read").post(BookController.updateBook);
router.route("/get/book").get(BookController.getAllBook);

module.exports = router;
