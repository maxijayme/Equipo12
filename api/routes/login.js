const { Router } = require('express');
const router = Router();
const initialState = require('../../client/initialState.js');
const validateLogin = require('../middlewares/validate.js')

router.post('/', validateLogin, async (req,res)=>{
    try{
        const {user,password}=req.body;
        const loginUser = await initialState.filter(u => u.userName === user && u.password === password)
        if(loginUser.length>0){
            res.status(200).send('logueado exitosamente')
        }else{
            res.status(404).send('usuario o password inválido')
        }
    }
    catch(err){
        res.send(err)
    }
})

module.exports = router