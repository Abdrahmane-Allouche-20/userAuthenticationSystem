const mongoose = require('mongoose')

const connectDB = (URI) => {
    return mongoose.connect(URI)
        .then(() => { console.log("connected to database") })
        .catch((error) => {
            console.log('connection failed')
            console.log(error.message)
        })
}

module.exports = connectDB;
