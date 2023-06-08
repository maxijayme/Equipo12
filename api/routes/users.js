const { Router } = require('express');
const router = Router();
const db = require('../db/db.js');
const { QueryTypes } = require('sequelize');
const hashPassword = require('./utils/hash_password.js')
require('dotenv').config()
const secret_key = process.env.SECRET_KEY;
const generateToken = require('./utils/generateToken.js');

router.get('/:id', async (req,res)=>{
    const {id} = req.params;
    try{
        const user =  await db.query(`Select id_usuario, fullname, username, phone, email, city, country, linkedin, photo, nivel_estudios, perfil from tusuario where id_usuario = "${id}" `, { type: QueryTypes.SELECT })
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

router.get('/search_username/:username', async (req,res)=>{
    const {username} = req.params;
    try{
        const user =  await db.query(`Select id_usuario, fullname, username, phone, email, city, country, linkedin, photo, nivel_estudios, perfil from tusuario where username = "${username}" `, { type: QueryTypes.SELECT })
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

router.get('/', async (req,res)=>{
    try{
        const user =  await db.query(`Select id_usuario, fullname, username, phone, email, city, country, linkedin, photo, nivel_estudios, perfil from tusuario`, { type: QueryTypes.SELECT })
        if(user.length>0){
            res.status(200).json(user)
        }else{
            res.status(404).send('no hay usuarios')
        }
    }
    catch(err){
        console.log(err)
    }
})

router.get('/filterRelations/:idUser', async (req,res)=>{
    const {idUser} = req.params;
    
    try{
        const user =  await db.query(`SELECT * FROM tusuario WHERE id_usuario != ${idUser} and id_usuario NOT IN (SELECT id_solicitante from tsolicitudes WHERE estado='pendiente' and id_solicitado=${idUser})`, { type: QueryTypes.SELECT })
        
        console.log(user)
        if(user.length>0){
            res.status(200).json(user)
        }else{
            res.status(404).send({msj:'no hay usuarios'})
        }
    }
    catch(err){
        console.log(err)
    }
}) 

router.get('/search_user/:fullname', async (req,res)=>{
    try{
        const {fullname} = req.params;
        const user = await db.query (`Select id_usuario, fullname, username, phone, email, city, country, linkedin, photo, nivel_estudios from tusuario where LOWER(fullname) like "%${fullname.toLocaleLowerCase()}%"`, { type: QueryTypes.SELECT })
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



module.exports = router
