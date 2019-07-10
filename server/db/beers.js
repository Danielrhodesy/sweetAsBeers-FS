const db = require ('./connection')


function getBeers() {
    return db('beers').select().orderBy('name')
}

module.exports = {
    getBeers,
}