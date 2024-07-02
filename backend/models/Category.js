const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
   name:{
    type:String,
    required:true,
    unique:true
   },
},{timestamps:true});

// Check if the model already exists before defining it
const Category = mongoose.models.Category || mongoose.model("Category",CategorySchema); 

module.exports = Category;