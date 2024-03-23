// APP ENVIRONMENT
const envparser = require('./envparser')
const APP_ENV = envparser.parseENV(process.env)

//console.log( __filename );
//console.log( __dirname );
// npm install express --save
//npm install body-parser --save
//npm install cookie-parser --save
//npm install multer --save
var express = require('express');
var fs = require("fs");
var multer = require('multer')
// var upload = multer({ dest: 'uploads/' })
const middlewares = require('./middlewares')
const health = require('./health')
const utils = require('./utils')



const appInclueAllPaths = (_app) => {
   console.log("Preparing Application Paths");

   _app.get('/', function (req, res) {
      console.log("Cookies: ", req.cookies);
   });

   _app.get('/index.htm', function (req, res) {
      res.sendFile(__dirname + "/" + "index.html");
   });

   app.get('/uploadfile.html', function (req, res) {
      res.sendFile(__dirname + "/" + "uploadfile.html");
   });

   _app.get('/process_get', function (req, res) {
      // Prepare output in JSON format
      const response = {
         first_name: req.query.first_name,
         last_name: req.query.last_name
      };
      console.log(response);
      res.end(JSON.stringify(response));
   });

   _app.post('/file_upload', function (req, res) {
      console.log(req.files.file.name);
      console.log(req.files.file.path);
      console.log(req.files.file.type);
      var file = __dirname + "/" + req.files.file.name;

      fs.readFile(req.files.file.path, function (err, data) {
         fs.writeFile(file, data, function (err) {
            if (err) {
               console.log(err);
            } else {
               response = {
                  message: 'File uploaded successfully',
                  filename: req.files.file.name
               };
            }
            console.log(response);
            res.end(JSON.stringify(response));
         });
      });
   });
   console.log("Prepare Application Paths completed");
}

const app = express();
const server = app.listen(APP_ENV.PORT, async () => {
   middlewares.initMiddlewareHandler(app, express);
   health.onLiveHandler(app)
   var host = server.address().address;
   var port = server.address().port;
   console.log(`App listening at http://${host}, ${port}`);
   // test delayed initialization
   await utils.delay(5000)
   appInclueAllPaths(app)

   // wait for app initializations
   // TODO add some other initialization here, can be middlewares or handlers, buisness logics, database connections
   
   // replace ENV in html
   utils.replaceEnvInTmpl(__dirname + "/public/" + "index.html.tmpl", APP_ENV);
   utils.replaceEnvInTmpl(__dirname + "/public/" + "uploadfile.html.tmpl", APP_ENV);


   // test delayed initialization
   await utils.delay(5000)
   health.onReadyHandler(app);
});

