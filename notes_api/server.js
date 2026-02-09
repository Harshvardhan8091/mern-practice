const express = require("express")
const connectDB = require("./config/db")
const noteRoutes = require("./routes/noteRoutes")

const app = express()

connectDB()

app.use(express.json())
app.use(noteRoutes)

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})