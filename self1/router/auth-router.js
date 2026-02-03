const express = require("express")
const router = express.Router()
const authcontrollers = require("../controler/auth-controler")

router.get("/" , authcontrollers.home);

router.post('/register', authcontrollers.register);

module.exports = router
