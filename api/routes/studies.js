const { Router } = require('express');
const router = Router();
const db = require('../db/db.js');
const { QueryTypes } = require('sequelize');


router.get('/:userId', async (req,res)=>{
    const userId = req.params.userId;
    try{
        const studies = await db.query(`Select titulo, centro, f_inicio, f_fin, actualidad from testudios WHERE id_usuario="${userId}" `, { type: QueryTypes.SELECT });
        if(studies.length>0){
            res.status(200).json(studies);
        }else{
            res.status(400).send('Aún no tiene estudios registrados')
        }
    }
    catch(err){
        console.log(err);
    }
})


module.exports = router