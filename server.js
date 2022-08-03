const { urlencoded } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const controle = require('./controller/controller');

var app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.use(express.static('public'));

mongoose.connect('mongodb+srv://mehdipshr:mehdi12345@cluster0.7je5n.mongodb.net/?retryWrites=true&w=majority')
    .then( () => {
        console.log('DB is connected')
    })
    .catch( err => { 
        console.log(err)
    })

app.get('/', controle.homePage)
app.get('/about', controle.aboutPage)
app.post('/massage', controle.newComment)
app.get('/contact', controle.contactPage)
app.get('/*', controle.notFound)

app.listen('4300', () => console.log('node js is running on 4300'))