
//console.log( __filename );
//console.log( __dirname );
// npm install express --save
//npm install body-parser --save
//npm install cookie-parser --save
//npm install multer --save

const express = require('express');
const app = express();
// APP ENVIRONMENT
const envparser = require('../envparser')
const APP_ENV = envparser.parseENV(process.env)

app.use(express.static('public'));

app.get('/', function (req, res) {
   res.send('Hello World');
})


const server = app.listen(APP_ENV.PORT, function () {
   const host = server.address().address
   const port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})
