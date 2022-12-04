require('dotenv').config();
const router  = require('express').Router()

const formInfo = require('../model/infoSchema');


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
        console.log(req.body);
        const {email, location, blood_group, age, drug, chronic_disease, malaria} = req.body;
        try{
            const user = new formInfo({
                email,
                location,
                blood_group,
                age,
                drug,
                chronic_disease,
                malaria
            });
            user.save()
            .then((data)=>{
                console.log(data)
                res.json(data);
            })
            .catch((err)=>{
                console.log(err)
                res.json(err)
            })
    }
    catch(err){
        console.log(err);
        res.json({"serverError":err});
    }
    }
    );

module.exports = router;
