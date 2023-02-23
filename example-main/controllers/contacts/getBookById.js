const fs = require("fs/promises")
const path = require("path")

const booksPath = path.join(__dirname, "../../models/books.json")

const getBookById = async (req, res) => {
        const data = await fs.readFile(booksPath)
        const books = JSON.parse(data)
        const { id } = req.params
        const result = books.find(book => book.id === id)
        if (!result) {
            res.status(404).json({ message: `Not found book with id:${id}` })
        }
        res.json(result)
}

module.exports = getBookById