const cookie = {
    secret: "fisdfh89ef89ewh",
    saveUninitialized: false,
    resave: false,
    maxAge: 3600,
}
const corsOptionsContent = {
    "methods": "GET,POST",
    "preflightContinue": true,
    "optionsSuccessStatus": 200,
    "allowedHeaders":['Content-Type'],
    "origin":"http://localhost:3000",
    "credential":true,
    "accessControlAllowOrigin":true,
    "Access-Control-Allow-Origin":"http://localhost:3000",
    
};
const corsOptionsAuth = {
    "origin": "*",
    "methods": "GET,POST",
    "preflightContinue": false,
    "optionsSuccessStatus": 204,
    "allowedHeaders":['Authorization'],
    "credential":true
};
const corsOptions = {
    origin:true,
    credentials: true,
    optionsSuccessStatus: 200, 
    preflightContinue: true,
    methods: 'GET,POST',
    allowedHeaders: ['Content-Type','Authorization'],
    exposedHeaders: ['Content-Type','Authorization'],
    maxAge: 3600,
    accessControlAllowOrigin: true,
  }
const sessionSetting = {
    secret: "fisdfh89ef89ewh",
    saveUninitialized: false,
    resave: false,
    maxAge: 36000,
    cookie: {
        secure: true,
        httpOnly: true,
        maxAge: 36000,
        sameSite: 'none'
    }
}


module.exports = {cookie,corsOptionsContent,corsOptionsAuth, corsOptions, sessionSetting};