// Using Node.js `require()`
const mongoose = require('mongoose');

const connectDb = async () => {
    try {
        const connect = await mongoose.connect('mongodb+srv://kulkomzy:authtraining@cluster0.3j0jl.mongodb.net/')
        if(connect) {
            console.log('Mongo DB connected successfully');
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDb