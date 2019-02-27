require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
var cors = require('cors')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);



var db
MongoClient.connect('mongodb://sandbox:sandbox1@ds135532.mlab.com:35532/grocery', {
    useNewUrlParser: true
}, (err, database) => {
    if (err) return console.log(err)
    db = database.db('grocery')
    
        console.log('Listening on port 3001')

    
})
app.get('/', (req, res) => {
    let curser = db.collection('grocery').find().toArray(function (err, results) {
        error(err)
        console.log(results)
        res.send(results)
        // res.sendFile(__dirname + '/src/App.js');

    })
})
app.get('/groceries', (req, res) => {
    let curser = db.collection('grocery').find().toArray(function (err, results) {
        error(err)
        console.log(results)
        res.send(results)
        // res.render('index.html')
    })
})
app.post('/groceries/add', (req, res) => {
    db.collection('grocery').insertOne(req.body, (err, results) => {
        if (err) return console.log(err)
        console.log('saved to database')
        res.redirect('/')
    })
})








 function error(err) {
     if (err) return console.log(err)
 }










module.exports = app;

















//  "scripts": {
//    "start": "node bin/www",
//    "dev": "concurrently \"nodemon bin/www\" \"cd ./client  && npm start \" ",
//    "test": "echo \"Error: no test specified\" && exit 1"
//  }