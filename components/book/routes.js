const express = require('express')
const router = express.Router()
const { create, del, oneBook, allBooks, update } = require('./crud')

// GET by ID
router.get('/:id', oneBook)

// GET all
router.get('/', allBooks)

// POST Create a Book
router.post('/', create)

// PUT Update a Book's info
router.put('/:id', update)

// DELETE by ID
router.delete('/:id', del)

module.exports = router
