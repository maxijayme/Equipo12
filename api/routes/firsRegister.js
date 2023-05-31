const { Router } = require('express');
const router = Router();
const db = require('../db/db.js');
const { QueryTypes } = require('sequelize');
const hashPassword = require('./utils/hash_password.js')


router.post('/exist', async (req,res)=>{
    
    try{
        const {userName,email} = req.body
        let userExist = []
        let findUser = {
            dataUserName:false,
            dataEmail:false
        }
        if(userName){
            userExist =  await db.query(`Select username from tusuario where username = "${userName}"`, { type: QueryTypes.SELECT })
            console.log(userExist)
            if(userExist.length>0){
                findUser.dataUserName=true;
            }
        }
        if(email){
            userExist =  await db.query(`Select email from tusuario where email = "${email}"`, { type: QueryTypes.SELECT })
            if(userExist.length>0){
                findUser.dataEmail=true;
            }
        }  

        if(!findUser.dataEmail && !findUser.dataUserName) {
            res.status(200).json('todo ok')
        } else {
            res.status(401).json(findUser)
        }
    }
    catch(err){
        res.send(err)
    }
})

router.post('/', async (req,res)=>{
    console.log(req.body)
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

router.get('/', async(req, res)=>{
    console.log('algo')
})

module.exports = router