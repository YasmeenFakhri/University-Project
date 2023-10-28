const joi = require("joi");
const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: [true, "Please enter Book name "],
        trim: true,
        minlength: 3,
        maxlength: 100,
        unique: [true , "Existed in DB"],
      },
      description: {
        type: String,
        required: [true, "Please enter description"],
        trim: true,
      },
      price: {
        type: Number,
        required: [true, "Please enter price"],
      },
      category: {
        type: mongoose.Types.ObjectId,
        ref: "category",
        required: true,
      },

    },

    { timestamps: true }
  );
 

// function validateCreateBook(obj) {
//   const schema = joi.object({
//    name : joi.string().trim().min(5).max(100).required(),
//    description: joi.string().trim().min(5).max(100).required(),
//    price: joi.number().precision(2).required() ,
//    category 
//   });
//   return schema.validate(obj);
// }

const bookModel = mongoose.model("book", bookSchema);  
module.exports = {
    bookModel,
   // validateCreateBook
};
    