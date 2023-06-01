const { Router } = require('express');
const router = Router();
const db = require('../db/db.js');
const { QueryTypes } = require('sequelize');

router.post('/', async (req,res)=>{
    try{
        const {msj, recommendatedUserId, recommendationUserId}=req.body
        const newRecommendation = await db.query(`Insert into trecomendaciones (id_recomendante, id_recomendado, recomendacion) values ("${recommendationUserId}", "${recommendatedUserId}", "${msj}")`,{type: QueryTypes.INSERT })
        if(newRecommendation.length>0){
            res.status(200).send('recommendation success');
        }else{
            res.status(400).send('ha ocurrido un error en la base de datos')
        }
    }catch(err){
        console.log(err);
    }
});

module.exports=router;