const bookmodel = require("../model/bookmodel");
const catchError = require("../utilities/catchUtil");
const AppError = require("../utilities/appError");
const catchErrorAsync = require("../utilities/catchUtil");
const axios = require("axios");
const ApiFeatures = require("../utilities/apiFeatures");

const getAllBook = catchErrorAsync(async (req, res) => {
   const book = await bookmodel.find();

   if (!book) {
      return next(new AppError("ma`lumot topilmadi", 404));
   }

   res.status(200).json({
      book,
   });
});
const addBook = catchError(async (req, res, next) => {
   const { isbn } = req.params;
   const url = `https://openlibrary.org/books/${isbn}.json`;
   const data = await axios.get(url);

   if (!data) {
      return next(new AppError("ma`lumot topilmadi", 404));
   }
   const author = await axios.get(`https://openlibrary.org/${data.data.authors[0].key}.json`);
   console.log(author);
   const book = await bookmodel.create({
      isbn: req.params.isbn,
      title: data.data.title,
      author: author.data.alternate_names,
      first_publisher: data.data.publish_date,
      pages: data.data.number_of_pages,
   });
   res.status(200).json({
      book,
   });
   console.log("bu booooooooooook", book);
});
const updateBook = catchError(async (req, res) => {
   const book = await bookmodel.findOne({ isbn: req.body.isbn });
   book.status = req.body.status;
   book.save({ validateBeforeSave: true });
   res.status(200).json({
      book,
   });
});

module.exports = { getAllBook, addBook, updateBook };
