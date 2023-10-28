const express = require("express");
const router  = express.Router() ;
const asyncHandler = require("express-async-handler")
const {bookModel}    = require("../models/bookModel") ;
const categoryModel = require("../models/categoryModel") ;

const slugify = require("slugify");

const createBook = async (req, res) => {
    try {
        const { name, description, price, category } =
        req.body;
      
      //validation
      switch (true) {
        case !name:
          return res.status(500).send({ error: "Name is Required" });
        case !description:
          return res.status(500).send({ error: "Description is Required" });
        case !price:
          return res.status(500).send({ error: "Price is Required" });
  
      }
  
      const book = new bookModel({ 
            name : req.body.name ,
            description : req.body.description ,
            price : req.body.price,
            category : req.params.id,
      });
    
      await book.save();
      res.status(201).send({
        success: true,
        message: "book Created Successfully",
        book,
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
  
};

// const createBook = async (req, res) => {

//   const { error }  = validateCreateBook(req.body); 
//   if(error){
//       return res.status(400).json({message: error.details[0].message});
//   }
//   let book = await bookModel.findOne({name : req.body.name});
//   if(book){
//       return res.status(400).json({message : "this book already registered"})
//   }

//   book = new bookModel({
//       name : req.body.name ,
//       description : req.body.description ,
//       price : req.body.price,
//       category : req.body.category,
//   });

//  const result  =  await book.save();
//  res.status(201).json(result);
 
// };


  exports.createBook = createBook;
 