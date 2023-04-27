const express = require('express')
const server = express();
const routes = require('./routes/index.js');
var moment = require("moment");
const bodyParser = require('body-parser')

server.use(express.urlencoded({ extended: true, limit: '50mb' }));  
server.use(bodyParser.json({limit: '50mb'}))
server.use(express.json());

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
});


server.use('/', routes);

server.get('/', (req, res) => {
    let time = '22-04-2023 14:20';
    // let time = moment()
    let postTime = moment((time), "DD/MM/YYYY hh:mm");
    let getTime = moment();
    let diffTime = moment(postTime).from(getTime);
    res.json({time:diffTime})
});

server.listen(3001, console.log('server online'))