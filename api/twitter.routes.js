var myrouter = require('express').Router()

var {
    getAllUsersController,
    getUserByIdController,
    postMessageByIdController,
    putMessageByIdController,
} = require('./twitter.controller')


myrouter.get('/', getAllUsersController)
myrouter.get('/:id', getUserByIdController)
myrouter.post('/tweet/:id/:message', postMessageByIdController)
myrouter.put('/tweet/:id/:message', putMessageByIdController)

module.exports = myrouter