const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    givenName: String,
    familyName: String,
    email: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);