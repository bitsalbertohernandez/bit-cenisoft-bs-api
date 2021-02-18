const mongoose = require('mongoose')

const saleSchema = new mongoose.Schema({
    date: { type: date, required: true },
    total: { type: number, required: true },
    idClient: {
        type: Schema.Types.ObjectId,
        ref: 'Client',
        required: true
    },
    detail: [
        {
            idBook: {
                type: Schema.Types.ObjectId,
                ref: 'Book',
                required: true
            },
            name: { type: string, required: true },
            unitValue: { type: number, required: true },
            amount: { type: number, required: true },


        }
    ]
})

const SaleModel = mongoose.model('sale', saleSchema)

module.exports = SaleModel
