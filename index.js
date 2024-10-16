require('dotenv').config;
const express = require('express');
const app = express();
const port = process.env.ports || 3001;
const fs = require('fs');
const path = require('path');
app.use(express.json());
const ejs = require(ejs);
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname, './output')));
app.use(express.static(path.join(__dirname, './json')));
app.use(express.static(path.join(__dirname,'./views')));

app.get('/', async (req,res)=>{
    await res.render('index',{name:'Главная'});
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});