const {MongoClient} = require('mongodb')

let dbConnection
function connectToDb(callBack) {
    MongoClient.connect('mongodb+srv://rajarohini:rajarohini@cluster0.yh84olm.mongodb.net/FitnessTracker?retryWrites=true&w=majority').then(function(client) {
        dbConnection = client.db()
        callBack()
    }).catch(function(error) {
        callBack(error)
    })
}

function getDb() {
    return dbConnection
}

// Exporting required functions
module.exports = {connectToDb, getDb}