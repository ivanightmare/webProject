const LocalStrategy = require('passport-local').Strategy;
const bcryptjs = require('bcryptjs');

const User = require('../models/User');

module.exports = function(passport) {
    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'

    }, async (email, password, done) => {
        try {
            const user = await User.findOne({ email: email });
            if (!user) {
                return done(null, false, { message: 'That email is not registered' });
            }
            const match = await bcryptjs.compare(password, user.password);
            if (!match) {
                return done(null, false, { message: 'Password incorrect ' });
            }
            return done(null, user);
        } catch (error) {
            sendError(error);
        }
    }));

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
            done(err, user);
        });
    });
};
