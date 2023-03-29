let bDelete = document.getElementById("deleteAccount");
bDelete.addEventListener('click', deleteAccount)

function deleteAccount(){
    let option = confirm("Estás segur@ que quieres eliminar tu cuenta? \nEste proceso es irreversible.")
    console.log(option)
    if(option === true){
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