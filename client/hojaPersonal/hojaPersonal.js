const userList = JSON.parse(localStorage.getItem("userList"));
const currentUser = JSON.parse(localStorage.getItem("currentUser"));

const exist = userList.filter(user => user.id == currentUser.id)

const userPhoto = document.getElementById('profilePhoto');
const userPhone = document.getElementById('phone');
const userEmail = document.getElementById('email');
const userLinkedin = document.getElementById('linkedin')

const actualUser = localStorage.getItem("userIdTeclapedia");

if(exist.length == 0){
    location.href=document.referrer
}

let bDelete = document.getElementById("deleteAccount");
bDelete.addEventListener('click', deleteAccount)

function deleteAccount(){
    let option = confirm("Estás segur@ que quieres eliminar tu cuenta? \nEste proceso es irreversible.")
    if(option === true){
        const deleteuser = userList.filter(user => user.id != currentUser.id);
        localStorage.setItem("userList", JSON.stringify(deleteuser))
        loader()
        setTimeout( redirect, 3000)       
    }
}

function redirect(){
    location.href="/register/index.html";
}

function loader(){
    let loaderContainer = document.getElementById('loader');
    loaderContainer.style.display='flex'  
}

// llamada para coger los datos
async function getUserData(){
    await fetch('http://localhost:3001/profile/'+actualUser)
    .then(data=> data.json())
    .then(data=>{
        console.log(data);
    })
    .catch(console.error)
}

getUserData();