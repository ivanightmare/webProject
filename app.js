const express = require('express');
const expresslayouts = require('express-ejs-layouts');

const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const flash = require('connect-flash');

const app = express();



app.use(
    session({
        secret: 'secret',
        resave: true,
        saveUninitialized: true
    })
);
    

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});