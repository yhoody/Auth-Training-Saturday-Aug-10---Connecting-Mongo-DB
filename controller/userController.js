const User = require("../model/userModel.js") 
const generateToken = require("../util/generateToken.js")

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
            const token = generateToken(newUser._id)
            res.cookie('jwt', token, {
                httpOnly: true, 
                sameSite: 'strict', 
                maxAge: 30 * 24 * 60 * 60 * 1000, 
                secure: process.env.NODE_ENV !== 'development'
            })
            res.status(201).json(
                {
                success: "User Registered successfullly",
                _id: newUser._id,
                fullName: newUser.fullName,
                email: newUser.email,
                phone: newUser.phone, 
                token 
                }
            )
        }

    } catch (error) {
        res.status(400).json({error: "Invalid user data"}) 
    }
}

const authUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (user && await user.matchPassword(password)) {
            const token = generateToken(user._id);
            res.cookie('jwt', token, {
                httpOnly: true,
                sameSite: 'strict',
                maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
                secure: process.env.NODE_ENV !== 'development',
            });
            res.status(200).json({
                success: "User authenticated successfully",
                _id: user._id,
                fullName: user.fullName,
                token,
            });
        } else {
            res.status(401).json({ error: "Invalid email or password" });
        }
    } catch (error) {
        res.status(400).json({ error: "Invalid user data" });
    }
};


module.exports = {regUser, authUser}