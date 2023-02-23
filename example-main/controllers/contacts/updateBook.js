const fs = require("fs/promises")
const path = require("path")

const booksPath = path.join(__dirname, "../../models/books.json")
const { HttpError } = require("../../helpers")
const { addSchema } = require("../../schemas")

const updateBook = async (req, res) => {
        const { error } = addSchema.validate(req.body)
        if (error) {
            throw HttpError(400, "Missing fields")
        }

        const data = await fs.readFile(booksPath)
        const books = JSON.parse(data)

        const { id } = req.params
        const { name, email, phone } = req.body

        const currentIndex = books.findIndex((book) => book.id === id);
        if (currentIndex === -1) {
            throw HttpError(404, "Not found")
        }
        books[currentIndex] = { id, name, email, phone };
        await fs.writeFile(booksPath, JSON.stringify(books));
        res.json(books[currentIndex])
}

module.exports = updateBook