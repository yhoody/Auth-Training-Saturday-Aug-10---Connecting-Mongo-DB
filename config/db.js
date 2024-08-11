// Using Node.js `require()`
const mongoose = require('mongoose');
require('dotenv').config()

const connectDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI)
        if(connect) {
            console.log('Mongo DB connected successfully');
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDb