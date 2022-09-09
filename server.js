
const express  = require('express');
const app = express;
const port = 1916;
const path = require('path');

app.use('/css',express.static(path.join(__dirname+"/css")));
app.get('/',express.static(path.join(__dirname+"/index.html")));
app.get('/hobbies',express.static(path.join(__dirname+"/hobbies.html")));
app.get('/contacts',express.static(path.join(__dirname+"/contacts.html")));


