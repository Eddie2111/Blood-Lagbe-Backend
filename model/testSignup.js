const mongoose = require('mongoose');
const schema = mongoose.Schema;
const Joi = require('joi');

const TestSignupSchema = new schema({
    name:{
        type: String,
    },
    phoneNumber:{
        type: String,
        max: 11,
        min: 11,
        unique: true,
    },
    blood_group:{
        type: Joi.string().valid('A+', 'A-','B+','B-','AB+','AB-','O+','O-'),
    },

}, {collection: 'users'});

const TestUserSignup = mongoose.model('testSignup', TestSignupSchema);

module.exports = TestUserSignup;