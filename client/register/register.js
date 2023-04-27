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

function createUser(event){
    event.preventDefault();
    if(password.value === passwordConfirm.value){
       
        loader();
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
    location.href="/formulario/index.html";
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