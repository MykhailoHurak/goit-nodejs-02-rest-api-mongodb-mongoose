const express = require('express')

const { ctrlWrapper } = require("../../helpers")
const { getAllBooks, getBookById, addBook, removeBook, updateBook } = require("../../controllers/books")

const router = express.Router()

router.get('/', ctrlWrapper(getAllBooks))

router.get('/:id', ctrlWrapper(getBookById))

router.post('/', ctrlWrapper(addBook))

router.delete('/:id', ctrlWrapper(removeBook))

router.put('/:id', ctrlWrapper(updateBook))

module.exports = router
