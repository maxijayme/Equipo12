const jwt = require('jsonwebtoken')
const secretKey = process.env.SECRET_KEY;


function isLogged(req,res,next){
    var bearerHeader = req.headers['authorization']
    var bearer = bearerHeader.split(" ");
    token = bearer[1];
    jwt.verify(token, secretKey, function(err, decoded) {
        if (err){
            req.authenticated = false;
            req.decoded = null;
        } else {
            req.decoded = decoded;
            req.authenticated = true;
        }
    });
    next()
}

module.exports = isLogged;
