const bookmodel = require("../model/bookmodel");
const catchError = require("../utilities/catchUtil");
const AppError = require("../utilities/appError");
const catchErrorAsync = require("../utilities/catchUtil");

const GetAllBook = catchError(async (req, res, next) => {
   const allBook = await bookmodel.find();
   if (!allBook) {
      return next(new AppError("kitoblar mavjud emas", 404));
   }

   res.status(200).json({
      allBook,
   });
});

const PostBook = catchErrorAsync(async (req, res, next) => {
   const isbn = req.params.id;

   const postData = {
      isbn,
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
module.exports = { GetAllBook, PostBook };
