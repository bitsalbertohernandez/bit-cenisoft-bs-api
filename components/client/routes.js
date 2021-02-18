const express = require('express')
const router = express.Router()
const { create, del, oneClient, allClients, update } = require('./crud')

// GET all
router.get('/', allClients)

// GET by ID
router.get('/:id', oneClient)

// POST Create a Client
router.post('/', create)

// PUT Update a Client's info
router.put('/:id', update)

// DELETE by ID
router.delete('/:id', del)

module.exports = router
