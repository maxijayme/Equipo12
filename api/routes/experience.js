const { Router } = require('express');
const router = Router();
const db = require('../db/db.js');
const { QueryTypes } = require('sequelize');


router.get('/:userId', async (req,res)=>{
    console.log('entra en back')
    const userId = req.params.userId;
    console.log(userId)
    try{
        const experiences = await db.query(`Select puesto, empresa, funciones, f_inicio, f_fin, actualidad from ttrabajos WHERE id_usuario="${userId}" `, { type: QueryTypes.SELECT });
        if(experiences.length>0){
            res.status(200).json(experiences);
        }else{
            res.status(400).send('Aún no tiene recomendaciones')
        }
    }
    catch(err){
        console.log(err);
    }
})


module.exports = router