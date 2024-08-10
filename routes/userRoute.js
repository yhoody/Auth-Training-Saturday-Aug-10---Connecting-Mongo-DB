const express = require('express') 
const { regUser } = require('../controller/userController')
const router = express.Router()

router.post("/user/register",regUser)

















module.exports = router
