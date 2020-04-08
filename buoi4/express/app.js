const express = require('express');
let app = express();

let a = 0;

app.use('/', (req, res, next) => {
    console.log(1);
    next();
});

app.get('/', (req, res, next)=> {
   res.send(`hello: ${a++}`);
});


app.use('/', (req, res, next) => {
    console.log(3);
});

app.listen(3000);