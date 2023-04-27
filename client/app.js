const initialState = require('.initialState.js');
let prevPage = document.referrer
const loginButton = document.getElementById('login');
if(prevPage.length == 0){
    localStorage.setItem("userList", JSON.stringify(initialState))
}else{
    loginButton.addEventListener('click', loginFunc);
}

const username = document.getElementById('user');
const password = document.getElementById('password');

username.addEventListener('input', enableButton)
password.addEventListener('input', enableButton)
username.addEventListener('focus', verify)
password.addEventListener('focus', verify)

const userList = JSON.parse(localStorage.getItem("userList"));



function loginFunc(event){
    event.preventDefault();
    console.log(userList)
    const currentUser = userList.filter(user => user.userName == username.value);
    if(currentUser.length>0){
        if(currentUser[0].password == password.value){
            localStorage.setItem("currentUser", JSON.stringify(currentUser[0]))
            location.href="/main/index.html"
        }else{
            let html = "<p>Password incorrecto</p>";
            password.insertAdjacentHTML("afterend", html);
        }
    }else{
        let html = "<p>Usuario incorrecto</p>";
        username.insertAdjacentHTML("afterend", html);
    }
}

function verify(){
    if(this.nextSibling.localName == 'p'){
        this.nextSibling.remove()
    }
}

function enableButton(){
    if(username.value != "" && password.value != ""){
        loginButton.disabled = false;
     }else{
        registerButton.disabled = true;
    }
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