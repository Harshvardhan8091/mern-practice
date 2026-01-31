const express = require("express")
const router = express.Router()


router.get("/", (req, res) => {
    res.send("ROUTER HOME")
})

router.get("/register", (req, res) => {
    res.send("ROUTER REGISTER")
})

module.exports = router
