const mongoose = require('mongoose');
const schema = mongoose.Schema;
const Joi = require('joi');

const Schema = new schema({
    email: {
        type: String,
        required: true,
        email: { minDomainSegments: 2, maxDomainSegments: 6 }
    },
    location: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,
    },
    blood_group:{
        type: Joi.string().valid('A+', 'A-','B+','B-','AB+','AB-','O+','O-'),
    },
    
    gender: {
        type: Joi.string().valid('Male','Female'),
    },
    age: {
        type: Number,
        min: 16,
    },
    drug: {
        type: Joi.string().valid('Yes','No'),
    },
    chronic_disease: {
        type: Joi.string().valid('Yes','No'),
    },
    malaria: {
        type: Joi.string().valid('Yes','No'),
    },

}, {collection: 'userInformation'});

const infoSchema = mongoose.model('info', Schema);

module.exports = infoSchema;