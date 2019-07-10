const express = require('express')
const router = express.Router()
const db = require('../db/beers')

router.get('/', (req,res) => {
    db.getBeers()
        .then(beers => {
            res.json(beers)
        })
})
 
module.exports = router