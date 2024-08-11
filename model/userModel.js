const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = mongoose.Schema(
{
    fullName: {
        type: String, 
        required: true,
    },
    email: {
        type: String, 
        required: true,
        unique: true
    },
    phone: {
        type: String, 
        required: true,
        unique: true
    },
    password: {
        type: String, 
        required: true,
    }
},
{
    timestamps: true,
})



// middleware to hash password before saving
userSchema.pre('save', async function (next){
    if(!this.isModified('password')){
        return next()
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})



module.exports = mongoose.model('User', userSchema)