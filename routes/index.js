const express = require('express');
const app     = express();
const router  = express.Router();
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

    }
    );

module.exports = router;
