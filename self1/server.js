const express = require("express")
const app = express()
const authRouter = require("./router/auth-router")

app.use("/api/auth", authRouter)


const port = 7000;
app.listen(port, () => {
    console.log("SERVER RUNNING ON 7000")
})
