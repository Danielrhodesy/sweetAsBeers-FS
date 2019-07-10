const express = require('express')
const server = express()

const beersRoutes = require('./routes/beers')

server.use(express.json())
server.use(express.static('public'))

server.use('/api/beers', beersRoutes)

module.exports = server