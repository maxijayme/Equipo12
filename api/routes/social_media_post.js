const { Router } = require('express');
const router = Router();
const db = require('../db/db.js');
const { QueryTypes } = require('sequelize');
const {getDate, getMoment} = require ('./utils/time.js')

router.post('/', async(req,res)=>{
    try{
        const {userId,postText,postImg}=req.body;
        const postDate = await getDate();
        const post = await db.query(`Insert into tpublicaciones (id_usuario, imagen_publicacion, texto_publicacion, fecha_publicacion) values ("${userId}", "${postImg}", "${postText}", "${postDate}")`,{type: QueryTypes.INSERT })
        if(post.length>0){
            res.status(200).json({msj:'new post success'})
        }else{
            res.status(404).json({msj:'new post error on db'})
        }
    }
    catch(err){
        res.send(err)
    }
})

router.patch('/', async(req,res)=>{
    try{
        const {id_publicacion, likes }=req.body;
        const post = await db.query(`Update tpublicaciones set likes = "${likes}" where id_publicacion = "${id_publicacion}"`,{type: QueryTypes.UPDATE })
        if(post.length>0){
            res.status(200).json({msj:'new post success'})
        }else{
            res.status(404).json({msj:'new post error on db'})
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
        const img = await db.query (`Select photo from tusuario where id_usuario = "${id}"`, { type: QueryTypes.SELECT })
        const dateText = await getMoment(lastPost[0].fecha_publicacion)
        lastPost[0].diffTime = dateText;
        lastPost[0].photo = img[0]
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

router.get('/friendsPosts/:userId', async(req,res)=>{
    try{
        const {userId} = req.params
        const allPost = await db.query(`SELECT tpublicaciones.*, tusuario.*
        FROM tpublicaciones
        INNER JOIN tusuario ON tpublicaciones.id_usuario = tusuario.id_usuario
        WHERE tusuario.id_usuario IN (SELECT id_amigo FROM tamistades WHERE id_usuario = "${userId}")
        ORDER BY fecha_publicacion DESC;
     `, { type: QueryTypes.SELECT })
        res.status(200).json(allPost)
    }
    catch(err){
        res.send(err)
    }
})

router.get('/userPost/:userId',async(req,res)=>{
    console.log('llega al back')
    try{
        const {userId} = req.params
        const allPost = await db.query(`SELECT tpublicaciones.*, tusuario.*
        FROM tpublicaciones
        INNER JOIN tusuario ON tpublicaciones.id_usuario = tusuario.id_usuario WHERE tusuario.id_usuario = "${userId}" ORDER BY fecha_publicacion DESC`, { type: QueryTypes.SELECT })
        res.status(200).json(allPost)
    }
    catch(err){
        res.send(err)
    }
})

module.exports = router