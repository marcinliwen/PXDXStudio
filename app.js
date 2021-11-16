const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.use(express.static('./'));
app.use('.src/', express.static('./'));

router.get('*.html',function(req,res){
    res.sendFile(`src${req.originalUrl}`, { root: __dirname });
    //__dirname : It will resolve to your project folder.
});

router.get('/',function(req,res){
    res.sendFile('src/index.html', { root: __dirname });
    //__dirname : It will resolve to your project folder.
});

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running server');
