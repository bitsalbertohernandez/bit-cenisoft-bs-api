const BookModel = require('./model')

const create = (req, res) => {
    const book = new BookModel(req.body)
    book.save((error, newBook) => {
        if (error) {
            res.status(500).send('The book has not been created')
        } else {
            res.status(201).send(newBook)
        }
    })
}

const update = (req, res) => {
    BookModel.updateOne({ _id: req.params.id }, req.body, (error, result) => {
        if (error) {
            res.status(500).send('An error occurred try again')
        } else {
            res.send(result)
        }
    })
}

const del = (req, res) => {
    BookModel.findByIdAndDelete(req.params.id, (error, resp) => {
        if (error) {
            res.status(500).send('The book has not been deleted')
        } else {
            res.send(resp)
        }
    })
}

const oneBook = (req, res) => {
    BookModel.findById(req.params.id, (error, findedBook) => {
        if (findedBook) {
            res.send(findedBook)
        }
        else {
            res.status(404).send('Book not found')
        }
    })
}

const allBooks = (req, res) => {    
    BookModel.find({}, (error, books) => {
        if (error) {
            res.status(404).send('Books not found')
        } else {
            res.send(books)
        }
    })
}

module.exports = { create, del, oneBook, allBooks, update }
