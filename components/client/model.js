const mongoose = require('mongoose')

const clientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String },
    cell: { type: String },
    email: { type: String, required: true },
    pass: { type: String, required: true }
})

const ClientModel = mongoose.model('client', clientSchema)

module.exports = ClientModel
