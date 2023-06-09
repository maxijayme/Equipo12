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
        console.log(responseJson.status)
        if(loginResponse.status == 200){
            username.value=''
            password.value = ''
            localStorage.setItem("userIdTeclapedia",JSON.stringify(responseJson[0].id_usuario))
            location.href="/client/main/index.html"
        }else if(loginResponse.status == 401){
            if(responseJson.uservalid != ''){usernameLabel.innerHTML = responseJson.uservalid};
            if(responseJson.passwordvalid != ''){passwordLabel.innerHTML = responseJson.passwordvalid};
        }
        else{
            passwordLabel.innerHTML='El usuario o la contraseña son incorrectos'
        }
    }
}

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
        if(inputValue.length < 5){
            labelsData.password='La contraseña debe tener al menos 6 caracteres';
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

// Script Google
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    var id_token = googleUser.getAuthResponse().id_token;
  }