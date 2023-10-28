const joi = require("joi");
const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true , 'Category Required'],
        unique: [true ,'Categeory must be unique'],
    },
    

},{timestamp : true });

function validateCreateCategory(obj) {
    const schema = joi.object({
     name : joi.string().trim().min(2).max(100).required(),
    });
    return schema.validate(obj);
  }
const categoryModel = mongoose.model("category", categorySchema);

module.exports = {
    categoryModel,
    validateCreateCategory
 } ;
