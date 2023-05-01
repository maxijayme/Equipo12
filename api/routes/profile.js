const { Router } = require('express');
const router = Router();
const db = require('../db/db.js');
const { QueryTypes } = require('sequelize');


router.get('/:id', async (req,res)=>{
    console.log(id);
    try{
        const {id} = req.params;
        const actualUser = await db.query(`Select phone,email,linkedin,photo from tusuario where username = "${id}"`, { type: QueryTypes.SELECT });
        console.log(actualUser);
        res.status(200).json(actualUser);
    }catch(err){
        console.send(err);
    }
});

module.exports=router;