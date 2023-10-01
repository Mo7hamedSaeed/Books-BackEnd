const mongoose = require('mongoose');
let booksSchema = mongoose.Schema({
    author : String,
    country : String,
    imageLink : String,
    language : String,
    link : String,
    pages : Number,
    title : String,
    year : Number,
    id : Number,
    category:String,
});

module.exports=mongoose.model("Book",booksSchema);