const { Router } = require('express');
const router = Router();
const db = require('../db/db.js');
const { QueryTypes } = require('sequelize');
// const getDate = require ('./utils/')

router.post('/', async(req,res)=>{
    try{
        const {userId,postText,postImg}=req.body;
        const postDate = await getDate();
        const post = await db.query(`Insert into tpublicaciones (id_usuario, imagen_publicacion, texto_publicacion, fecha_publicacion) values ("${userId}", "${postImg}", "${postText}", "${postDate}")`,{type: QueryTypes.INSERT })
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