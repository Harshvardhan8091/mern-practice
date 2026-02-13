import express from 'express'
import session from 'express-session'
const app = express();
app.use(express.json());

app.use(
    session({
        secret : "hello123",
        resave : false,
        saveinitialized: false
    })
)

const USER = {
    username: "harsh",
    password: "1234"
};