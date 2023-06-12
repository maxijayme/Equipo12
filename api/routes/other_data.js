const { Router } = require('express');
const router = Router();
const db = require('../db/db.js');
const { QueryTypes } = require('sequelize');


router.get('/:userId', async (req,res)=>{
    const userId = req.params.userId;

    try{
        const other_knowledge = await db.query(`Select licencia, hobbies, idiomas, otros_conocimientos from totros_datos WHERE id_usuario="${userId}" `, { type: QueryTypes.SELECT });
        if(other_knowledge.length>0){
            res.status(200).json(other_knowledge);
        }else{
            res.status(400).send('Aún no hay otros datos disponibles')
        }
    }
    catch(err){
        console.log(err);
    }
})


module.exports = router