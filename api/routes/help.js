const { Router } = require('express');
const router = Router();
const db = require('../db/db.js');
const { QueryTypes } = require('sequelize');


router.post('/', async (req,res)=>{
    try{
        const {title, question, subject,userId} = req.body;
        const questionSaved = await db.query(`Insert into tconsultas (titulo, texto, categoria, id_usuario) values ("${title}", "${question}", "${subject}", "${userId}")`,{type: QueryTypes.INSERT })
        if(questionSaved.length>1){
            res.status(200).send("question sended");
        }
    } catch(err){
        console.log(err)
    }
})

module.exports = router