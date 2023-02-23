const fs = require("fs/promises")
const path = require("path")

const booksPath = path.join(__dirname, "../../models/books.json")
const { HttpError } = require("../../helpers")

const removeBook = async (req, res) => {
        const data = await fs.readFile(booksPath)
        const books = JSON.parse(data)
        const { id } = req.params
        const result = books.filter(book => book.id !== id)
        if (books.length === result.length) {
            throw HttpError(404, "Not found")
        }
        await fs.writeFile(booksPath, JSON.stringify(result));
        res.json({
            message: "Book deleted"
        })
}

module.exports = removeBook