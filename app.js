const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cores = require('cors');
require('dotenv/config')

//Middlewares
app.use(cores());
app.use(bodyParser.json());

//Import Routes
const postRoute = require('./routes/posts');

app.use('/posts', postRoute);

//ROUTES
app.get('/', (req, res) => {
    res.send('we are on home');
});

//Connect To DB
// mongodb://<dbuser>:<dbpassword>@ds155396.mlab.com:55396/rest
mongoose.connect(process.env.DB_CONNECTION, { userNewUrlParser: true }, () =>{
    console.log('connected to DB!');
});

//How to we start listening to the server
app.listen(3000);