const Joi = require('joi');

const signupSchema = Joi.object({
    firstName: Joi.string()
        .min(3)
        .max(30)
        .pattern(new RegExp('^[a-zA-Z]+$'))
        .required(),
    lastName: Joi.string()
        .min(3)
        .max(30)
        .pattern(new RegExp('^[a-zA-Z]+$'))
        .required(),
    email: Joi.string()
        .email({ minDomainSegments: 2, maxDomainSegments: 6 })
        .required(),

    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{5,30}$')),

    repeat_password: Joi.ref('password'),

    phoneNumber : Joi.string()
        .pattern(new RegExp("(88)?0?1[156789][0-9]{8}"))
        .required()

})


// -> { value: { username: 'abc', birth_year: 1994 } }

//schema.validate({});
// -> { value: {}, error: '"username" is required' }

// Also -

try {
    const value = signupSchema.validateAsync({
        firstName: 'abc',
        lastName: 'abc',
        email: 'turner@gmail.com',
        password:"orehbaba121",
        repeat_password:"orehbaba121",
        phoneNumber: "01703721883"
    });
}
catch (err) { 
    console.log(err)
}

module.exports = signupSchema;