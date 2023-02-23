const { Schema, model } = require("mongoose")

const bookSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Set name for book'],
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
     favorite: {
        type: Boolean,
        default: false,
    },
}, {versionKey: false, timestamps: true})

const BookModel = model("book", bookSchema)

module.exports = BookModel