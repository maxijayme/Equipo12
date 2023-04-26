const URL = 'http://localhost:3001';
let success = false;
const loginButton = document.getElementById('login');
loginButton.addEventListener('click', loginFunc);
const username = document.getElementById('user');
const password = document.getElementById('password');
username.addEventListener('input', enableButton)
password.addEventListener('input', enableButton)
const usernameLabel = document.getElementById('username_label');
const passwordLabel = document.getElementById('password_label');

let loginData = {
    user:"",
    password:"",
}

let labelsData = {
    password:"",
    user:"",
}
let userok,passwordok = false

async function loginFunc(event){
    event.preventDefault();
    loginData.user = username.value;
    loginData.password = password.value;
    if(success){
        const loginResponse = await fetch(`${URL}/login`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(loginData)
        })
        const responseJson = await loginResponse.json()
        if(loginResponse.status == 200){
            username.value=''
            password.value = ''
            location.href="/client/main/index.html"
        }else if(loginResponse.status == 401){
            if(responseJson.uservalid != ''){usernameLabel.innerHTML = responseJson.uservalid};
            if(responseJson.passwordvalid != ''){usernameLabel.innerHTML = responseJson.passwordvalid};
        }
        else{
            passwordLabel.innerHTML='El usuario o la contraseña son incorrectos'
        }
    }
}

let login

function enableButton(e){
    validate(e)
    if(username.value.length > 0 && password.value.length > 0 && success){
        loginButton.disabled = false;
     }else{
        loginButton.disabled = true;
    }
}


function validate(e){
    const inputName = e.target.name;
    const inputValue = e.target.value;
    if(inputName === 'username'){
        if (!/^[a-zA-Z\s]*$/.test(inputValue)) {
            labelsData.user='Solo se permiten letras';   
            userok = false  
        }
        if(inputValue.length<4){
            labelsData.user='El usuario debe tener al menos 4 letras';
            userok = false  
        }
        else{
            labelsData.user='';
            userok = true  
        }
    }
    if(inputName === 'password'){
        if(inputValue.length < 8){
            labelsData.password='La contraseña debe tener al menos 8 caracteres';
            passwordok = false;
        }else
        if(inputValue.length > 20){
            labelsData.password='La contraseña debe tener 20 caracteres máximo';
            passwordok = false;
        }
        else{
            labelsData.password='';
            passwordok = true;
        }
    }
    usernameLabel.innerHTML= labelsData.user
    passwordLabel.innerHTML= labelsData.password
    userok && passwordok? success=true : success=false
}