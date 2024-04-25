const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const ejs = require('ejs')
const path = require('path');
const port = 3000
const app = express();
app.use(express.static('./public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

app.get('/', (req,res)=>{
    res.render('Signup')
})

app.get('/loginpage', (req,res)=>{
    res.render('loginpage')
})

app.get('/Signup', (req,res)=>{
    res.render('Signup')
})

app.get('/cs', (req,res)=>{
    res.render('cs')
})

app.get('/des', (req,res)=>{
    res.render('des')
})

app.get('/engi', (req,res)=>{
    res.render('engi')
})

app.get('/hs', (req,res)=>{
    res.render('hs')
})

app.get('/law', (req,res)=>{
    res.render('law')
})

app.get('/lbs', (req,res)=>{
    res.render('lbs')
})

app.get('/manag', (req,res)=>{
    res.render('manag')
})

app.get('/media', (req,res)=>{
    res.render('media')
})

app.get('/upload', (req,res)=>{
    res.render('upload')
})

app.get('/uploadd', (req,res)=>{
    res.render('uploadd')
})

app.get('/WebtechPMS', (req,res)=>{
    res.render('WebtechPMS');
});

app.listen(port, ()=>{
    console.log('Server at 3000')
})

