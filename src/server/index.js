const express = require('express');
const os = require('os');
const passport = require("passport");
const app = express();
const passportSetup = require("./config/passport-setup");
const session = require("express-session");
const authRoutes = require("./routes/auth-routes");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const cors = require("cors");
const cookieSession = require("cookie-session");
const cookieParser = require("cookie-parser"); // parse cookie header

// connect to mongodb
mongoose.connect(keys.MONGODB_URI, () => {
    console.log("connected to mongo db");
});

app.use(
    cookieSession({
        name: "session",
        keys: [keys.COOKIE_KEY],
        maxAge: 24 * 60 * 60 * 100
    })
);

// parse cookies
app.use(cookieParser());

app.use(express.static('dist'));

// initalize passport
app.use(passport.initialize());

// set up cors to allow us to accept requests from our client
app.use(
    cors({
        origin: "http://localhost:3000", // allow to server to accept request from different origin
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        credentials: true // allow session cookie from browser to pass through
    })
);

// set up routes
app.use("/auth", authRoutes);

const authCheck = (req, res, next) => {
    if (!req.user) {
        res.status(401).json({
            authenticated: false,
            message: "user has not been authenticated"
        });
    } else {
        next();
    }
};


app.get("/", authCheck, (req, res) => {
    res.status(200).json({
        authenticated: true,
        message: "user successfully authenticated",
        user: req.user,
        cookies: req.cookies
    });
});
app.listen(5000, () => console.log('Listening on port 5000!'));
