const { Router } = require('express');
const router = Router();
const validateLogin = require('../middlewares/validate.js');
const db = require('../db/db.js');
const { QueryTypes } = require('sequelize');

router.post('/', validateLogin, async(req,res)=>{
    try{
        const {user,password}=req.body;
        const loginUser =  await db.query(`Select * from tusuario where username = "${user}" and password = "${password}" `, { type: QueryTypes.SELECT })
        console.log(loginUser);
        if(loginUser.length>0){
            res.status(200).json({msj:'usuario logueado exitosamente'})
        }else{
            res.status(404).json({msj:'usuario o password inválido'})
        }
    }
    catch(err){
        res.send(err)
    }
})

module.exports = router