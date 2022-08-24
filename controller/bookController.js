const bookmodel = require("../model/bookmodel");
const catchError = require("../utilities/catchUtil");
const AppError = require("../utilities/appError");
const catchErrorAsync = require("../utilities/catchUtil");
const axios = require("axios");
const ApiFeatures = require("../utilities/apiFeatures");

const GetAllBook = catchError(async (req, res, next) => {
   const resultperpage = 6;
   const features = new ApiFeatures(bookmodel.find(), req.query)
      .search()
      .filter()
      .pagination(resultperpage);
   const data = await features.query;

   res.status(200).json({
      soni: data.length,
      data,
   });
});

const PostBook = catchErrorAsync(async (req, res, next) => {
   const postData = {
      isbn: req.body.isbn,
      title: req.body.title,
      author: req.body.author,
      first_publisher: req.body.first_publisher,
      pages: req.body.pages,
      book_status: req.body.book_status,
   };
   const post = await bookmodel.create(postData);
   res.status(201).json({
      post,
   });
});

const deleteBook = catchErrorAsync(async (req, res, next) => {
   const Id = req.params.id;

   const deleteBook = await bookmodel.findByIdAndDelete(Id);

   if (!deleteBook) {
      return next(new AppError("bunday idli book mavjud emas", 404));
   }
   res.status(200).json({
      deleteBook,
   });
});

const getOneBook = catchErrorAsync(async (req, res, next) => {
   const oneBook = await bookmodel.findById(req.params.id);

   if (!oneBook) {
      return next(new AppError("bunday idli kitob mavjud emas", 404));
   }

   res.status(200).json({
      oneBook,
   });
});

const UpdateBook = catchErrorAsync(async (req, res, next) => {
   const bookupdate = await bookmodel.findByIdAndUpdate(req.params.id,req.body);
   if (!bookupdate) {
      return next(new AppError(" bunday idli book mavjud emas", 404));
   }
   res.status(200).json({
      message:"book updated",
      bookupdate
   });
});
module.exports = { GetAllBook, PostBook, deleteBook, getOneBook, UpdateBook };
