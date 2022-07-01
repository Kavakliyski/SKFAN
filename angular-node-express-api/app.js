const express = require('express');
const path = require('path');
// var cookieParser = require('cookie-parser');
const router = require('./routes/users');
const bodyParser = require('body-parser');
const uid = require('uid-safe');


const users = require('./routes/users');

const app = express();

router.get('/', function(req, res, next){
	var strUid = uid.sync(18);

	res.json({guid: strUid});
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser())

app.use('/api/v1/user', users);
// app.use('/api/v1/generate_uid', generate_uid);


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

