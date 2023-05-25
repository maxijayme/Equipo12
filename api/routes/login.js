const { Router } = require('express');
const router = Router();
const validateLogin = require('../middlewares/validate.js');
const db = require('../db/db.js');
const { QueryTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const hashPassword = require('./utils/hash_password.js');
require('dotenv').config()
const generateToken = require('./utils/generateToken.js')
const isLogged = require('../middlewares/isLogged.js')

router.post('/hash', async(req,res)=>{
    const {userId}=req.body;
    try{
        const password = await db.query(`Select password from tusuario where id_usuario = "${userId}" `, { type: QueryTypes.SELECT })
        const hashed = await hashPassword(password[0].password,8)
        await db.query(`UPDATE tusuario SET password = "${hashed}" where id_usuario = "${userId}"`,{type: QueryTypes.UPDATE })
        res.send("password was hashed")
    }
    catch(error){
        res.send(error)
    }
})

router.post('/',validateLogin,  async(req,res)=>{
    try{
        const {username,password}=req.body;
        const passwordDB = await db.query(`Select id_usuario, password, perfil from tusuario where username = "${username}" `, { type: QueryTypes.SELECT })
        bcrypt.compare(password, passwordDB[0].password, function(err, result) {
            if(result == true){
                const token = generateToken(passwordDB[0]);
                res.status(200).json({token, userId: passwordDB[0].id_usuario, profile: passwordDB[0].perfil})
            }
            else{
                res.status(404).json({msj:'usuario o password inválido'})
            }
        });
    }
    catch(err){
        res.status(400).send(err)
    }
})




module.exports = router