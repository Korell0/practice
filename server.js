const express  = require('express');
const app = express();
const port = 5000;
const path = require('path');

app.use('/css',express.static(path.join(__dirname+"/css")));

app.get('/', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname+"/index.html"))
});

app.get('/hobbies', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname+"/hobbies.html"))
});

app.get('/contacts', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname+"/contacts.html"))
});

app.listen(port, ()=>{
    console.log(`Server listening ON ${port} port...`);
})
