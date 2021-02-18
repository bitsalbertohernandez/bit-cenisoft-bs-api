const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    cover: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String },
    unitValue: { type: Number},
    categories: { type: Array}
}, {
    timestamps: true
})

const BookModel = mongoose.model('book', bookSchema)

module.exports = BookModel
