const mongoose = require("mongoose")

const connectDB = async () => {
    await mongoose.connect(
        "mongodb+srv://harshtanwar2804_db_user:harsh2804@cluster0.t8j9sao.mongodb.net/notesdb"
        )
}

module.exports = connectDB
