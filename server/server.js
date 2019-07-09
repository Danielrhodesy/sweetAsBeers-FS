const express = require('express')
const server = express()

server.use(express.json())
server.unsubscribe(express.static('public'))

module.exports = server