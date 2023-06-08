const { Router } = require('express');
const users = require('./users.js')
const login= require('./login.js')
const social_media_post = require('./social_media_post.js')
const profile = require('./profile.js')
const friends = require('./friends.js')
const help = require('./help.js')
const router = Router();
const isLogged = require('../middlewares/isLogged.js')
const questions = require('./questions.js')
const form = require('./form.js')
const register = require('./firsRegister.js')
const pendingRequest = require('./pending_request.js')
const recommendation = require('./recommendation.js')
const experience = require('./experience.js')

router.use('/login', login)
router.use('/users', users)
router.use('/social_media_post', social_media_post)
router.use('/profile',profile)
router.use('/friends',friends)
router.use('/help', help)
router.use('/questions', questions)
router.use('/form', form)
router.use('/register',register)
router.use('/pending_request',pendingRequest)
router.use('/recommendation', recommendation)
router.use('/experience',experience)

router.post('', isLogged, (req,res,next)=>{
    if(req.authenticated){
        res.status(200).send('isValid')
    }else{
        res.status(400).send('isNotValid')
    }
})

module.exports = router;