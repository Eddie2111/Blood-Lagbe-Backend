require('dotenv').config();
const router  = require('express').Router()

const loginSchema = require('../controllers/loginValidator');
const UserSignup = require('../model/signupSchema');
const jwt = require('jsonwebtoken');


const data = {
    title: "welcome",
    message: "data came from node backend but changed",
    version: "10.10.10",
    page:"/very very first test page!"
};


router
    .route('/')
    .get((req,res)=>{
        res.json(data);
    })
    .post((req,res)=>{
        const {email,password} = req.body;
        try{
            const {error, value} = loginSchema.validate(req.body);
            if(error){
                console.log(error)
                res.json(error)
            }
            if(value){
                UserSignup.findOne({
                    email:email,
                    password:password
                })
                .then((data)=>{
                    console.log("login success");
                    res.cookie('accesstoken',jwt.sign({email:email},"Ytryrtyrtyrt"),{httpOnly:true,secure:true,sameSite:'none'});
                    res.cookie("refreshtoken",jwt.sign({email:email},"98yh589th"),{httpOnly:true,secure:true,sameSite:'none'});
                    res.json({
                        status:200,
                        message:"login success",
                        route:"/form"
                    })
                })
                .catch((err)=>{
                    console.log(err)
                    res.json(err)
                })
            }
        }
        catch(err){
            console.log(err);
            res.json({err})
        }
    }
    );

module.exports = router;
