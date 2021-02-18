const ClientModel = require('./model')

const create = (req, res) => {
    const client = new ClientModel(req.body)
    client.save((error, newClient) => {
        if (error) {
            res.status(500).send('The client has not been created')
        } else {
            res.status(201).send(newClient)
        }
    })
}

const update = (req, res) => {
    ClientModel.updateOne({ _id: req.params.id }, req.body, (error, result) => {
        if (error) {
            res.status(500).send('An error occurred try again')
        } else {
            res.send(result)
        }
    })
}

const del = (req, res) => {
    ClientModel.findByIdAndDelete(req.params.id, (error, resp) => {
        if (error) {
            res.status(500).send('The client has not been deleted')
        } else {
            res.send(resp)
        }
    })
}

const oneClient = (req, res) => {
    ClientModel.findById(req.params.id, (error, findedClient) => {
        if (findedClient) {
            res.send(findedClient)
        }
        else {
            res.status(404).send('Client not found')
        }
    })
}

const allClients = (req, res) => {
    ClientModel.find({}, (error, clients) => {
        console.log(clients)
        if (error) {
            res.status(404).send('Clients not found')
        } else {
            res.send(clients)
        }
    })
}

module.exports = { create, del, oneClient, allClients, update }
