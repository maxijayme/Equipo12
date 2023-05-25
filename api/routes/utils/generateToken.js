const jwt = require('jsonwebtoken')
const secretKey = process.env.SECRET_KEY;

function generateToken(data) {
    var u = {
        userId: data.id_usuario,
        type: data.profile     
    }
    return token = jwt.sign(u, secretKey, {
       expiresIn: 60 * 60 * 24 // expires in 24 hours
    })
}

module.exports = generateToken;