const { Router } = require('express');
const router = Router();
const db = require('../db/db.js');
const { QueryTypes } = require('sequelize');


router.patch('/', async (req,res)=>{
    try{
        const {phone, linkedin, city, country, studiesLevel} = req.body;
        const newUser = await db.query(`Update tusuario set phone= "${phone}",linkedin= "${linkedin}",city= "${city}",country= "${country}", nivel_estudios= "${studiesLevel}" where id_usuario = 20`,{type: QueryTypes.UPDATE })
        console.log(newUser)
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

router.post('/', async (req,res)=>{
    try {
        
        const {degree,academy,dateStartStudies,dateEndStudies,stillStudying}=req.body;
        const {position,company,dateStartWorking,dateEndWorking,stillWorking,tasks} = req.body;
        const {licence,availability,preference,hobbies,extra,languages} = req.body;
        const newStudy = await db.query(`Insert into testudios (titulo, centro, f_inicio,f_fin,actualidad,id_usuario) values ("${degree}", "${academy}", "${dateStartStudies}", "${dateEndStudies}","${stillStudying ? 1:0}",20)`,{type: QueryTypes.INSERT })
        const newJob = await db.query(`Insert into ttrabajos (id_usuario,puesto, empresa,funciones,f_inicio,f_fin,actualidad) values (20,"${position}", "${company}", "${tasks}", "${dateStartWorking}","${dateEndWorking}","${stillWorking ? 1:0}")`,{type: QueryTypes.INSERT })
        const newOthers = await db.query(`Insert into totros_datos (id_usuario,licencia, disponibilidad,preferencia,hobbies,otros_conocimientos,idiomas) values (20,"${licence}", "${availability?1:0}", "${preference}", "${hobbies}", "${extra}", "${languages}")`,{type: QueryTypes.INSERT })
        res.status(200).json('ok')
    } catch(err){
        console.log(err)
    }
})

module.exports = router