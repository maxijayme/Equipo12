function validateLogin(req,res,next){
    const data = req.body
    let response = {
        uservalid:'',
        passwordvalid:''
    };
    if(data.username.length < 4){
       response.uservalid = 'El usuario debe tener al menos 4 letras';
    }
    if(data.password.length < 6){
       response.passwordvalid = 'La contraseña debe tener al menos 6 caracteres';
    }else if(data.password.length > 20){
       response.passwordvalid ='La contraseña debe tener 20 caracteres máximo';
    }
    if(response.uservalid!='' || response.passwordvalid != ''){
        res.status(401).send(response)
    }else{
        next();
    }
}

module.exports = validateLogin;