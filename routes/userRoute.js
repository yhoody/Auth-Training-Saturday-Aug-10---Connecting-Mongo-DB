const express = require('express') 
const { regUser, authUser, logoutUser,} = require('../controller/userController')
const router = express.Router()

router.post("/user/register",regUser)
router.post("/user/login",authUser)
router.post("/user/logout", logoutUser)

















module.exports = router
