const express = require("express")
const app = express()

console.log("🔥 THIS IS SELF1 SERVER FILE 🔥")

app.get("/", (req, res) => {
    res.send("NEW HOME FROM SELF1")
})

app.get("/register", (req, res) => {
    res.send("NEW REGISTER FROM SELF1")
})

app.listen(7000, () => {
    console.log("🚀 SERVER RUNNING ON 7000")
})
