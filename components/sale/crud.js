const SaleModel = require('./model')

const create = (req, res) => {
    const sale = new SaleModel(req.body)
    sale.save((error, newSale) => {
        if (error) {
            res.status(500).send('The sale has not been created')
        } else {
            res.status(201).send(newSale)
        }
    })
}

const update = (req, res) => {
    SaleModel.updateOne({ _id: req.params.id }, req.body, (error, result) => {
        if (error) {
            res.status(500).send('An error occurred try again')
        } else {
            res.send(result)
        }
    })
}

const del = (req, res) => {
    SaleModel.findByIdAndDelete(req.params.id, (error, resp) => {
        if (error) {
            res.status(500).send('The sale has not been deleted')
        } else {
            res.send(resp)
        }
    })
}

const oneSale = (req, res) => {
    SaleModel.findById(req.params.id, (error, findedSale) => {
        if (findedSale) {
            res.send(findedSale)
        }
        else {
            res.status(404).send('Sale not found')
        }
    })
}

const allSales = (req, res) => {
    SaleModel.find({}, (error, sales) => {
        console.log(sales)
        if (error) {
            res.status(404).send('Sales not found')
        } else {
            res.send(sales)
        }
    })
}

module.exports = { create, del, oneSale, allSales, update }
