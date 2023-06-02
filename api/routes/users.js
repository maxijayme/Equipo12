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

router.post('/create', async (req,res)=>{
    try{
        const {fullname, userName, email, password} = req.body;
        const hashed = await hashPassword(password,8)
        const newUser = await db.query(`Insert into tusuario (fullname, username, password, email) values ("${fullname}", "${userName}", "${hashed}", "${email}")`,{type: QueryTypes.INSERT })
        if(newUser.length>1){
            res.status(200).json(newUser);
        }
        else{
            res.status(404).send('No se pudo registrar el usuario')
        }
    } catch(err){
        console.log(err)
    }
})

router.patch('/createprofile', async (req,res)=>{
    try{
        const {id} = req.body[0];
        const {photoInput, phoneInput,linkedinInput,cityInput,countryInput,studiesInput} = req.body[1];
        const newUser = await db.query(`Update tusuario set photo= "${photoInput}",phone= "${phoneInput}",linkedin= "${linkedinInput}",city= "${cityInput}",country= "${countryInput}", nivel_estudios= "${studiesInput}" where id_usuario = ${id}`,{type: QueryTypes.UPDATE })
        if(newUser.length>1){
            res.status(200).json(newUser);
        }
        else{
            res.status(404).send('No se pudieron guardar los datos personales')
        }
    } catch(err){
        console.log(err)
    }
})

router.post('/createprofile', async(req,res)=>{
    try {
        const {id} = req.body[0];
        const {degree,academy,dateStartStudies,dateEndtStudies,stillStudying}=req.body[2];
        const {position,company,dateStartWorking,dateEndWorking,stillWorking,tasks} = req.body[3];
        const {licence,availability,preference,hobbies} = req.body[4];
        const newStudy = await db.query(`Insert into testudios (titulo, centro, f_inicio,f_fin,actualidad,id_usuario) values ("${degree}", "${academy}", "${dateStartStudies}", "${dateEndtStudies}","${stillStudying ? 1:0}","${id}")`,{type: QueryTypes.INSERT })
        const newJob = await db.query(`Insert into ttrabajos (id_usuario,puesto, empresa,funciones,f_inicio,f_fin,actualidad) values ("${id}","${position}", "${company}", "${tasks}", "${dateStartWorking}","${dateEndWorking}","${stillWorking ? 1:0}")`,{type: QueryTypes.INSERT })
        const newOthers = await db.query(`Insert into totros_datos (id_usuario,licencia, disponibilidad,preferencia,hobbies) values ("${id}","${licence}", "${availability?1:0}", "${preference}", "${hobbies}")`,{type: QueryTypes.INSERT })
        res.status(200).json('ok')
    } catch(err){
        console.log(err)
    }
})



router.post('/exist', async (req,res)=>{
    try{
        const {username,email} = req.body
        let userExist = []
        if(username){
            username && (userExist =  await db.query(`Select (username) from tusuario where username = "${username}"`, { type: QueryTypes.SELECT }))
            if(userExist.length==0){
                res.status(200).json('no existe');
            }else{
                res.status(401).json('username')
            }
        }
        if(email){
            email && (userExist =  await db.query(`Select email from tusuario where email = "${email}"`, { type: QueryTypes.SELECT }))
            if(userExist.length==0){
                res.status(200).json('no existe');
            }else{
                res.status(401).json('email')
            }
        }  
    }
    catch(err){
        res.send(err)
    }
})


module.exports = router
