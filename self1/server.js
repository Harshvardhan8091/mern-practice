const express = require("express")
const app = express()
const authRouter = require("./router/auth-router")
const connectDb = require("./util/db")

app.use(express.json())

app.use("/api/auth", authRouter)

const port = 7000

connectDb().then(() => {
    app.listen(port, () => {
        console.log("SERVER RUNNING ON 7000")
    })
})
