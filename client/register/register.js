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
        const userList = []
        const userStorage = JSON.parse(localStorage.getItem("userList"));
        if (userStorage) userList.concat((userStorage));
        const user = new User({
            fullname: fullname.value, 
            userName: userName.value, 
            email: email.value,
            password: password.value,
        })
        userList.push(user);
        localStorage.setItem("userList", JSON.stringify(userList));
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


function validate(){
    passwordConfirm.nextElementSibling.style.display='none';
    if(fullname.value, userName.value, email.value, password.value, passwordConfirm.value !== ""){
        registerButton.disabled = false;
    }else{
        registerButton.disabled = true;
    }
}