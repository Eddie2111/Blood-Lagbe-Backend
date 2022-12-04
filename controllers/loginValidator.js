const Joi = require('joi');

const loginSchema = Joi.object({

    email: Joi.string()
        .email({ minDomainSegments: 2, maxDomainSegments: 6 })
        .required(),

    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{5,30}$')),


})

// -> { value: { username: 'abc', birth_year: 1994 } }

//schema.validate({});
// -> { value: {}, error: '"username" is required' }

// Also -

try {
    const value = loginSchema.validateAsync({
        email: 'turner@gmail.com',
        password:"orehbaba121",
    });
}
catch (err) { 
    console.log(err)
}

module.exports = loginSchema;