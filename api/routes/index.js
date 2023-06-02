const { Router } = require('express');
const users = require('./users.js')
const login= require('./login.js')
const social_media_post = require('./social_media_post.js')
const profile = require('./profile.js')
const friends = require('./friends.js')
const friend_request = require('./friend_request.js')
const accept_friend = require('./accept_friend.js')
const delete_friend = require('./delete_friend.js')
const reject_friend = require('./reject_friend.js')
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
router.use('/friend_request', friend_request)
router.use('/accept_friend', accept_friend)
router.use('/delete_friend', delete_friend)
router.use('/reject_friend', reject_friend)
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