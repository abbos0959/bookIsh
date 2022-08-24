const mongoose = require("mongoose");

const DB = async () => {
   try {
      await mongoose.connect(process.env.URL);

      console.log("db ulandi");
   } catch (error) {
      console.log("mongodb ulanmadi");
   }
};

module.exports = DB;
