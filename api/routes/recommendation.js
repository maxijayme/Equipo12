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

router.get('/:userId', async (req,res)=>{
    try{
        const userId = req.params.userId;
        const userRecommendations = await db.query(`Select t.recomendacion, u.fullname from trecomendaciones t inner join tusuario u on t.id_recomendante = u.id_usuario where t.id_recomendado = "${userId}" `, { type: QueryTypes.SELECT });
        if(userRecommendations.length>0){
            res.status(200).json(userRecommendations);
        }else{
            res.status(400).send('Aún no tiene recomendaciones')
        }
    }
    catch(err){
        console.log(err);
    }
})

module.exports=router;