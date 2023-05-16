const { Router } = require('express');
const router = Router();
const validateLogin = require('../middlewares/validate.js');
const db = require('../db/db.js');
const { QueryTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const hashPassword = require('./utils/hash_password.js')

router.post('/hash', async(req,res)=>{
    const {user}=req.body;
    try{
        const password = await db.query(`Select password from tusuario where id_usuario = "${user}" `, { type: QueryTypes.SELECT })
        const hashed = await hashPassword(password[0].password,8)
        await db.query(`UPDATE tusuario SET password = "${hashed}" where id_usuario = "${user}"`,{type: QueryTypes.UPDATE })
        res.send("password was hashed")
    }
    catch(error){
        res.send(error)
    }
})

router.post('/',  async(req,res)=>{
    try{
        const {user,password}=req.body;
        const passwordDB = await db.query(`Select id_usuario, password from tusuario where username = "${user}" `, { type: QueryTypes.SELECT })
        bcrypt.compare(password, passwordDB[0].password, function(err, result) {
            if(result == true){
                res.status(200).json(passwordDB[0].id_usuario)
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