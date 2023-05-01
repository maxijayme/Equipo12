let bDelete = document.getElementById("deleteAccount");
bDelete.addEventListener('click', deleteAccount)
let closeSession = document.getElementById("closeSession");
closeSession.addEventListener('click', closingSession)

function deleteAccount(){
    let option = confirm("Estás segur@ que quieres eliminar tu cuenta? \nEste proceso es irreversible.")
    if(option === true){
        localStorage.removeItem('userIdTeclapedia')
        loader()
        setTimeout( redirect, 3000)       
    }
}

function closingSession(){
    let option2 = confirm("Estás segur@ que cerrar sesión?")
    if(option2 === true){
        localStorage.removeItem('userIdTeclapedia')
        loader2()
        setTimeout( redirect, 3000)       
    }
}

function redirect(){
    location.href="/client/register/index.html";
}

function loader(){
    let loaderContainer = document.getElementById('loader');
    loaderContainer.style.display='flex'  
}


function loader2(){
    let loaderContainer = document.getElementById('loader2');
    loaderContainer.style.display='flex'  
}