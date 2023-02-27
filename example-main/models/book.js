const { Schema, model } = require("mongoose")

const bookSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Set Title for book'],
    },
    author: {
        type: String,
        required: [true, 'Set Author for book'],
    },
     favorite: {
        type: Boolean,
        default: false,
    },
}, {versionKey: false, timestamps: true})

const BookModel = model("book", bookSchema)

module.exports = BookModel