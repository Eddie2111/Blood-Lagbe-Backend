const mongoose = require('mongoose');
const schema = mongoose.Schema;

const signupSchema = new schema({
    firstName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 30,
        pattern: new RegExp('^[a-zA-Z]+$')
    },
    lastName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 30,
        pattern: new RegExp('^[a-zA-Z]+$')
    },
    email: {
        type: String,
        required: true,
        email: { minDomainSegments: 2, maxDomainSegments: 6 }
    },
    password: {
        type: String,
        required: true,
        pattern: new RegExp('^[a-zA-Z0-9]{5,30}$')
    }
}, {collection: 'users'});

const UserSignup = mongoose.model('signup', signupSchema);

module.exports = UserSignup;