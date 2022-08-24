const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
   isbn: { type: String, required: [true, "siz isbn kiritishni unutdingiz"] },
   title: { type: String, required: [true, "siz kitob nomini kiritishingiz kerak"] },

   author: { type: String, required: [true, "Siz kitob authorini kiritishingiz kerak"] },

   first_publisher: {
      type: Date,
      required: [true, "siz kitobni nashr etilgan yilini kiritishni unitdingiz"],
   },
   pages: {
      type: String,
      required: [true, "siz kitob sahifalar sonini kiritishni unitdingiz"],
   },
   book_status: {
      type: String,
      enum: ["new", "reading,", "finished"],
      required: [true, "siz kitob statusini kiritmadingiz"],
   },
});

module.exports = mongoose.model("book", BookSchema);
