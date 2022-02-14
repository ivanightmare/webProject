const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true

    },
    date: {
        type: Date,
        dedault: Date.now
    },
    role: {
        type: String,
        default: 'user',
        enum: ['user','staff','boss']
    },
    avatar: {
        type: String,
        default: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200'
    },
    isActive: {
        type: Boolean,
        default: true
    },
    resetPasswordToken: String,
    resetPasswordExpires: Date
});

const User = mongoose.model('User', UserSchema);
module.exports = User;