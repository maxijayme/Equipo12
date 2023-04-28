const { Router } = require('express');
const router = Router();
const initialState = require('../../client/initialState.js')
const db = require('../db/db.js');
const { QueryTypes } = require('sequelize');

router.get('/:id', (req,res)=>{
    try{
        const {id} = req.params;
        const user = initialState.filter(user => user.id == id)
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

router.get('/search_user/:fullname', (req,res)=>{
    try{
        const {fullname} = req.params;
        const user = initialState.filter(user => {
                if(user.fullName.toLocaleLowerCase().includes(fullname.toLocaleLowerCase())){
                    return user
                }
            })
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
        const newUser = await db.query(`Insert into tusuario (fullname, username, password, email) values ("${fullname}", "${userName}", "${password}", "${email}")`,{type: QueryTypes.INSERT })
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
        const {photoInput, phoneInput,linkedinInput,cityInput,countryInput,studiesInput} = req.body[1];
        console.log(studiesInput)
        const {degree, academy, dateStartStudies, dateEndtStudies, stillStudying} = req.body[2];
        const newUser = await db.query(`Update tusuario set photo= "${photoInput}",phone= "${phoneInput}",linkedin= "${linkedinInput}",city= "${cityInput}",country= "${countryInput}", nivel_estudios= "${studiesInput}" where id_usuario = 9`,{type: QueryTypes.UPDATE })
        // if(newUser.length>1){
        //     res.status(200).json(newUser);
        // }
        // else{
        //     res.status(404).send('No se pudo registrar el usuario')
        // }
    } catch(err){
        console.log(err)
    }
})



router.post('/exist', async (req,res)=>{
    try{
        const {username,email} = req.body
        let userExist = []
        if(username){
            username && (userExist =  await db.query(`Select * from tusuario where username = "${username}"`, { type: QueryTypes.SELECT }))
            if(userExist.length==0){
                res.status(200).json('no existe');
            }else{
                res.status(401).json('username')
            }
        }
        if(email){
            email && (userExist =  await db.query(`Select * from tusuario where email = "${email}"`, { type: QueryTypes.SELECT }))
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