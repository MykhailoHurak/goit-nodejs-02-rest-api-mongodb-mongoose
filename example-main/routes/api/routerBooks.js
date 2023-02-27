const express = require('express')

const { isValidId } = require("../../middlewares")
const { ctrlWrapper } = require("../../helpers")
const { getAllBooks, getBookById, addBook, removeBook, updateBook, updateBookFavorite } = require("../../controllers/books")

const router = express.Router()

router.get('/', ctrlWrapper(getAllBooks))

router.get('/:id', ctrlWrapper(getBookById))

router.post('/', ctrlWrapper(addBook))

router.delete('/:id', isValidId,  ctrlWrapper(removeBook))

router.put('/:id', isValidId, ctrlWrapper(updateBook))

router.patch('/:id/favorite', isValidId, ctrlWrapper(updateBookFavorite))

module.exports = router
