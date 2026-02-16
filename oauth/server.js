import session from "express-session";
import dotenv from "dotenv";
import express from "express";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";

dotenv.config();

const app = express();

app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: true
}));

//initialize passport
app.use(passport.initialize());
app.use(passport.session());

//serialize user
passport.serializeUser((user, done) => {
    done(null, user);
});

//deserialize user
passport.deserializeUser((user, done) => {
    done(null, user);
});

//Google strategy
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback"
}, (accessToken, refreshToken, profile, done) => {
    done(null, profile);
}));

//routes
app.get