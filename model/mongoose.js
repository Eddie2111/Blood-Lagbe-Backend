const mongoose = require('mongoose');

const URL = "mongodb+srv://bloodbank21:bloodbank21@cluster0.skywm70.mongodb.net/?retryWrites=true&w=majority"; // this is the default port for mongoDB

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

module.exports = mongoose;
