const userList = JSON.parse(localStorage.getItem("userList"));
const currentUser = JSON.parse(localStorage.getItem("currentUser"));

const exist = userList.filter(user => user.id == currentUser.id)

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