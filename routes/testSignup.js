const express = require('express');
const app     = express();
const router  = express.Router();
const TestUserSignup = require('../model/testSignup');
app.set('view engine','ejs');
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
        const {name,phoneNumber,bloodGroup} = req.body;
        if(name && phoneNumber && bloodGroup){
            const user = new TestUserSignup({
                name,
                phoneNumber,
                bloodGroup
            });
            user.save()
            .then((data)=>{
                console.log(data)
                res.json({status:200,message:"data received"});
            })
            .catch((err)=>{
                console.log(err)
                res.json({status:400,message:"data not received",error:err.message});
            })
        }

    }
    );

module.exports = router;
