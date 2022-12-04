const express = require('express');
const app = express();
const session = require('express-session');
const cors = require('cors');
const cookieparser = require('cookie-parser');


// messages
const listen = require('./data/messages');

//configs
const { sessionSetting } = require('./data/config');
const { corsOptions } = require('./data/config');



//environment
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use( express.static( "public" ) );
app.use(session(sessionSetting));
app.use(cors(corsOptions));
app.use(cookieparser());
require('dotenv').config();

//database
const mongo = require('./model/mongoose');


//route imports
const index = require('./routes/index');
const form = require('./routes/form');
const signup = require('./routes/signup');
const login = require('./routes/login');
const TestSignup = require('./routes/testSignup');
//const showdata = require('./routes/showdata');

//routes
app.use('/',index);
app.use('/form',form);
app.use('/signup',signup);
app.use('/login',login);
app.use('/testSignup',TestSignup);
//app.use('/showdata',showdata);
//app.use('/success',require('./routes/success'));
//app.use('/test',require('./routes/test'));

// test
require("./controllers/signupValidator")


// error handling
const {errorRoute} = require ("./data/messages");
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
  
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.send(errorRoute);
});

//server start
app.listen(process.env.PORT,()=>{
    console.log("port→",process.env.PORT);
});