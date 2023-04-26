function validateLogin(req,res){
    const data = req.body
    let response = {
        uservalid:'',
        passwordvalid:''
    };
    if (!/^[a-zA-Z\s]*$/.test(data.userName)){
        response.uservalid = 'Solo se permiten letras ';
    }else
    if(data.user.length < 4){
       response.uservalid = 'El usuario debe tener al menos 4 letras';
    }
    if(data.password.length < 8){
       response.passwordvalid = 'La contraseña debe tener al menos 8 caracteres';
    }else if(data.password.length > 20){
       response.passwordvalid ='La contraseña debe tener 20 caracteres máximo';
    }
    res.status(401).send(response)
}

module.exports = validateLogin;