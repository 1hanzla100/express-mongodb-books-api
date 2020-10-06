// Mongoose 
const mongoose = require('mongoose')

const BookSchema = mongoose.Schema({
    Book: {
        type: String,
        required: true,
        max:250
    },
    author:{
        type: String,
        required: true
    },
})

module.exports = mongoose.model("book", BookSchema)