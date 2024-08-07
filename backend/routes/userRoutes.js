const express = require('express')
const router = express.Router()
const authController = require('../controller/authController')

router.route('/login').post(authController.loginUser)
router.route('/signup').post(authController.signupUser)

module.exports = router