const { Router } = require('express');
const router = Router();
const db = require('../db/db.js');
const { QueryTypes } = require('sequelize');

router.get('/:id', async (req,res)=>{
    try{
        const {id} = req.params;
        const friends =  await db.query(`Select id_amigo from tamistades where id_usuario = "${id}" `, { type: QueryTypes.SELECT })
        res.status(200).json(friends)
    }
    catch(error){
        res.send(error)
    }
})

router.post('/recommended', async (req,res)=>{
    try{
        const [user, friends] = req.body;
        console.log(friends)
        const friendsOfFriends = await Promise.all( friends.map(async friend => {
            const rep = await db.query(`Select id_amigo from tamistades where id_usuario = "${friend.id_amigo}" and id_amigo != "${user}"`, { type: QueryTypes.SELECT })
            return rep
        }))
        console.log(friendsOfFriends)
        res.status(200).json(friendsOfFriends)
    }
    catch(error){
        res.send(error)
    }
})

module.exports = router;