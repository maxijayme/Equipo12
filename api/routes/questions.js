const { Router } = require('express');
const router = Router();
const db = require('../db/db.js');
const { QueryTypes } = require('sequelize');
const isLogged = require('../middlewares/isLogged.js')

router.get('/',isLogged, async (req,res)=>{
    console.log("llega")
    try{
        const questions = await db.query(`Select u.username, t.estado, t.titulo, t.texto, t.categoria, t.id_consulta from tconsultas t inner join tusuario u on t.id_usuario = u.id_usuario where t.estado = "pendiente" `, { type: QueryTypes.SELECT });
        res.status(200).json(questions);
    }catch(err){
        console.log(err);
    }
});

router.patch('/',isLogged, async (req,res)=>{
    try{
        const {data, id_consulta} = req.body
        await db.query(`Update tconsultas set estado = "respondida", respuesta = "${data}" where id_consulta = "${id_consulta}" `, { type: QueryTypes.UPDATE });
        res.status(200).send('algo');
    }catch(err){
        console.log(err);
    }
});

module.exports=router;