const express = require('express')
const router = express.Router()
const { create, del, oneSale, allSales, update } = require('./crud')

// GET all
router.get('/', allSales)

// GET by ID
router.get('/:id', oneSale)

// POST Create a Sale
router.post('/', create)

// PUT Update a Sale's info
router.put('/:id', update)

// DELETE by ID
router.delete('/:id', del)

module.exports = router
