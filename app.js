

const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const http = require('http');
const mongoose = require('mongoose');
const morgan = require('morgan');
const fs = require('fs');
const winston = require('winston');

const configDB = require('./config/database.js');

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'})

let logger = new(winston.Logger)({
  transports: [
    new (winston.transports.Console)(),
    new (winston.transports.File)({filename: 'winston.log'})
  ]
});

let app = express();

app.use(morgan('combined', {stream: accessLogStream}));

mongoose.connect(configDB.url);
const conn = mongoose.connection;

require('./config/scripts')(conn);

conn.on('error', (error)=>{
  console.log(error);
  logger.error("error while connecting to mongodb" + error);
});

conn.once('open', ()=> {

debugger;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname+'/dist'));

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`API running on localhost:${port}`));

});
