const URL = 'http://localhost:3001';
let success, exist = false;

const registerButton = document.getElementById('register');
registerButton.addEventListener('click', createUser)

const fullname= document.getElementById('fullname');
const userName= document.getElementById('userName');
const email= document.getElementById('email');
const password= document.getElementById('password');
const passwordConfirm= document.getElementById('passwordConfirm');

fullname.addEventListener('input', validate);
userName.addEventListener('input', validate);
email.addEventListener('input', validate);
password.addEventListener('input', validate);
passwordConfirm.addEventListener('input', validate);
const fullnameLabel = document.getElementById('fullnameLabel');
const userNameLabel = document.getElementById('userNameLabel');
const emailLabel = document.getElementById('emailLabel');
const passwordLabel = document.getElementById('passwordLabel');
const passwordConfirmLabel = document.getElementById('passwordConfirmLabel');

userName.addEventListener('focusout', allreadyExist);
email.addEventListener('focusout', allreadyExist);

class User{
    constructor({
        fullname,
        email,
        userName,
        password
    }){
    this.fullname = fullname;
    this.userName = userName;
    this.email = email;
    this.password = password
    }
}

let fullnameok,userok,emailok, passwordok, passwordConfirmok = false

let labelsData = {
    user:"",
    fullname:"",
    email:"",
    password:"",
    passwordConfirm:"",
}

async function allreadyExist(e){
    let inputToCheck ={}
    if(e.target.name == 'userName'){
        inputToCheck = {username:e.target.value}
    }
    if(e.target.name == 'email'){
        inputToCheck = {email:e.target.value}
    }
    const response = await fetch(`${URL}/users/exist`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(inputToCheck)
    })
    console.log(response.status)
    if(response.status == 401){
        const responseJson = await response.json();
        if(responseJson == 'email'){
            emailLabel.innerHTML = 'El email ya está en uso';
            exist = false;
        }
        if(responseJson == 'username'){
            userNameLabel.innerHTML = 'El usuario ya está en uso';
            exist = false;
        }
    }else{
        emailLabel.innerHTML = '';
        userNameLabel.innerHTML = '';
        exist = true;
    }
}

async function createUser(event){
    event.preventDefault();
    console.log(success, exist)
    if(success && exist){
        const newUser = new User({
            fullname : fullname.value,
             userName : userName.value,
            email : email.value,
            password : password.value,
        })
        console.log(newUser)
        const response = await fetch(`${URL}/users/create`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser)
        })
        const responseJson = await response.json();
        if(responseJson.length>0){
            localStorage.setItem("userIdTeclapedia",JSON.stringify(responseJson[0]))
            loader();
        }
    }else{
        passwordConfirm.nextElementSibling.style.display='block';
    }
}


function loader(){
    let loaderContainer = document.getElementById('loader');
    loaderContainer.style.display='flex';
    setTimeout( redirect, 1500);       
}

function redirect(){
    location.href="/client/formulario/index.html";
}


function validate(e){
    const inputName = e.target.name;
    const inputValue = e.target.value;
    if(inputName === 'fullname'){
        if (!/^[a-zA-Z\s]*$/.test(inputValue)) {
            labelsData.user='Solo se permiten letras';   
            fullnameok = false  
        }
        else{
            labelsData.user='';
            fullnameok = true  
        }
    }
    if(inputName === 'userName'){
        if(inputValue.length<4){
            labelsData.user='El usuario debe tener al menos 4 letras';
            userok = false  
        }
        else{
            labelsData.user='';
            userok = true  
        }
    }
    if(inputName === 'email'){
        if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(inputValue)){
            labelsData.email='El formato del correo no es válido';
            emailok = false  
        }
        else{
            labelsData.email='';
            emailok = true  
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
    if(inputName === 'passwordConfirm'){
        if(inputValue != password.value ){
            labelsData.passwordConfirm='Los campos contraseña deben coincidir'
            passwordConfirmok = false;
        }
        else{
            labelsData.passwordConfirm=''
            passwordConfirmok = true;
        }
    }
    
    fullnameLabel.innerHTML= labelsData.fullname
    userNameLabel.innerHTML= labelsData.user
    emailLabel.innerHTML= labelsData.email
    passwordLabel.innerHTML= labelsData.password
    passwordConfirmLabel.innerHTML= labelsData.passwordConfirm
    if(userok && passwordok && emailok && passwordConfirmok && fullnameok ? success=true : success=false){
        registerButton.disabled = false;
    }else{
        registerButton.disabled = true;
    }
}