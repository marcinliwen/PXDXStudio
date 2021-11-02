// const express = require('express');
import express from 'express';
const app = express();
import path from 'path';
// const path = require('path');
const router = express.Router();

const __dirname = path.resolve().toString();

app.use(express.static('public'))

router.get('/',function(req,res){
    res.sendFile('src/index.html', { root: __dirname });
    //__dirname : It will resolve to your project folder.
});

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');
