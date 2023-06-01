const { Router } = require('express');
const router = Router();
const db = require('../db/db.js');
const { QueryTypes } = require('sequelize');
const {getDate, getMoment} = require ('./utils/time.js')

router.post('/', async(req,res)=>{
    try{
        const {userId,postText,postImg}=req.body;
        console.log(req.body)
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

router.get('/:id', async(req,res)=>{
    try{
        const {id} = req.params
        const lastPost = await db.query(`Select * from tpublicaciones where id_usuario = "${id}" and fecha_publicacion = (Select max(fecha_publicacion) from tpublicaciones where id_usuario = "${id}")`, { type: QueryTypes.SELECT })
        const img = await db.query (`Select * from tusuario where id_usuario = "${id}"`, { type: QueryTypes.SELECT })
        const dateText = await getMoment(lastPost[0].fecha_publicacion)
        lastPost[0].diffTime = dateText;
        lastPost[0].photo = img[0].photo
        res.status(200).json(lastPost)
    }
    catch(err){
        res.send(err)
    }
})

router.get('/', async(req,res)=>{
    try{
        const allPost = await db.query(`Select * from tpublicaciones left join tusuario on tpublicaciones.id_usuario = tusuario.id_usuario order by fecha_publicacion desc`, { type: QueryTypes.SELECT })
        // const dateText = await getMoment(lastPost[0].fecha_publicacion)
        res.status(200).json(allPost)
    }
    catch(err){
        res.send(err)
    }
})

module.exports = router