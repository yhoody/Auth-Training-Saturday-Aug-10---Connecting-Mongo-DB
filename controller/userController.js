const User = require("../model/userModel.js")

const regUser = async(req, res)=>{
    try {
        const {fullName, email, phone, password} = req.body
        const userEmailExists = await User.findOne({email})
        const userPhoneExists = await User.findOne({phone})

        if(userEmailExists||userPhoneExists){
            res.status(400).json({error: "User already exist"})
            return;
        }
        
        const newUser = await User.create({fullName, email, phone, password})
        
        if (newUser) {
            return res.status(201).json(
                {
                success: "User Registered successfullly",
                _id: newUser._id,
                fullName: newUser.fullName,
                email: newUser.email,
                phone: newUser.phone, 
                }
            )
        }

    } catch (error) {
        res.status(400).json({error: "Invalid user data"}) 
    }
}

module.exports = {regUser}