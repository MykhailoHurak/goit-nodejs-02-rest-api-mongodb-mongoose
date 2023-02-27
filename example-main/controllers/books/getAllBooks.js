const BookModel = require("../../models/book")

const getAllBooks = async (req, res) => { 
        const result = await BookModel.find()
        res.json(result)
}

module.exports = getAllBooks