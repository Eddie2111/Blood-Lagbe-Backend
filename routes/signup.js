require('dotenv').config();
const router  = require('express').Router()

const signupSchema = require('../controllers/signupValidator');
const UserSignup = require('../model/signupSchema');

const data = {
    title: "welcome",
    message: "data came from node backend but changed",
    version: "10.10.10",
    page:"/very very first test page!"
};
const success = {
    status:200,
    message:"data received"
};


router
    .route('/')
    .get((req,res)=>{
        res.json(data);
    })
    .post((req,res)=>{
        const {firstName, lastName, email, password, phoneNumber} = req.body;
        try{
            const {errors, value} = signupSchema.validate(req.body);
            if(errors){
                console.log(errors)
                res.json(errors)
            }
            if(value){
                console.log(value)
                const user = new UserSignup({
                    firstName,
                    lastName,
                    email,
                    password,
                    phoneNumber
                });
                user.save()
                .then((data)=>{
                    console.log(data)
                    res.json({value,success});
                })
                .catch((err)=>{
                    console.log(err)
                    res.json(err)
                })
                // remove it from here !!
                
            }

        }
        catch(err){
            console.log(err);
        }
        // ending //must remove from here!!

    }
    );

module.exports = router;
