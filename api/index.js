const express = require('express')
const server = express();
var moment = require("moment");
const initialState = require('../client/initialState.js');

server.use(express.json());

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

  
server.get('/perfil_terceros/:id', (req,res)=>{
    try{
        const {id} = req.params;
        const user = initialState.filter(user => user.id == id)
        if(user.length>0){
            res.status(200).json(user)
        }else{
            res.status(404).send('el usuario no existe')
        }
    }
    catch(err){
        console.log(err)
    }
})

server.get('/search_user/:fullname', (req,res)=>{
    try{
        const {fullname} = req.params;
        const user = initialState.filter(user => {
                if(user.fullName.toLocaleLowerCase().includes(fullname.toLocaleLowerCase())){
                    return user
                }
            })
        if(user.length>0){
            res.status(200).json(user)
        }else{
            res.status(404).send('el usuario no existesss')
        }
    }
    catch(err){
        console.log(err)
    }
})

server.get('/', (req, res) => {
    let time = '21-04-2023 14:20';
    // let time = moment()
    let postTime = moment((time), "DD/MM/YYYY hh:mm");
    let getTime = moment();
    let diffTime = moment(postTime).from(getTime);
    res.json({time:diffTime})
});

server.listen(3001, console.log('server online'))