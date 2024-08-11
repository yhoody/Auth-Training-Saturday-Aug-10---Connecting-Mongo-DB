const express = require('express') 
const { regUser, authUser} = require('../controller/userController')
const router = express.Router()

router.post("/user/register",regUser)
router.post("/user/login",authUser)

















module.exports = router
