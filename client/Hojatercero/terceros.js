const fullname = document.getElementById('fullname');
const userName = document.getElementById('userName');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const linkedin = document.getElementById('linkedin');
const city  = document.getElementById('city');
const navphoto  = document.getElementById('navphoto');
const registerDate  = document.getElementById('registerDate');
const thirdPersonPhoto  = document.getElementById('thirdPersonPhoto');

const url = 'http://localhost:3001';

const urlid = window.location.href; 
const id = urlid.substr(url.indexOf('?'+2));
const regex = /^[0-9]*$/;

let avatar;

if(regex.test(id)){
    getUserById()
}

async function getUserById(){
    await fetch(`${url}/users/${id}`)
    .then(data => data.json())
    .then(data =>{
        fullname.innerHTML= data[0].fullname
        userName.innerHTML= data[0].username
        phone.innerHTML= data[0].phone
        email.innerHTML= data[0].email
        linkedin.innerHTML= data[0].linkedin
        city.innerHTML= data[0].city
        avatar=data[0].photo
        thirdPersonPhoto.setAttribute('src',data[0].photo)
        navphoto.setAttribute('src',data[0].photo)
    }).catch()
}

function addOrRemovelike(){
    if(this.classList.contains('bi-heart')){
        this.classList.remove('bi-heart')
        this.classList.add('bi-heart-fill');
        this.classList.add('like');
        if(this.nextElementSibling.innerHTML == 0){
            this.nextElementSibling.style.display = 'contents'
        }
        console.log(this.nextElementSibling)
        likes = parseInt(this.nextElementSibling.innerHTML) + 1;
        this.nextElementSibling.innerHTML = likes;
    }else{
        this.classList.add('bi-heart');
        this.classList.remove('bi-heart-fill');
        this.classList.remove('like');
        likes = parseInt(this.nextElementSibling.innerHTML) - 1;
        this.nextElementSibling.innerHTML = likes;
        if(this.nextElementSibling.innerHTML == 0){
            this.nextElementSibling.style.display = 'none';
        }
    }
}

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => {
        const usuario = data.filter(user => user.userId == 1);
        usuario.forEach(element => {
 
            // Creamos div para la publicación
            const divPost = document.createElement('div');
            divPost.classList.add("post","container","p-3","mb-3");
            divPost.setAttribute("id",`post${element.id}`);

            // Div cabecera post
            const divCabecera = document.createElement('div');
            divCabecera.classList.add("cabeceraPost","row","d-flex","justify-content-left","align-items-center");
            const imgPost = document.createElement('img');
            imgPost.classList.add("fotoPost","img-fluid");
            imgPost.setAttribute("alt","fotoUsuario");

            const fotoUsuario = document.querySelector("#thirdPersonPhoto");
            imgPost.setAttribute("src", avatar);
            const nombrePost = document.createElement('p');

            const nombreUsuario = document.querySelector("#fullname");
            nombrePost.innerHTML = nombreUsuario.innerHTML;
            nombrePost.classList.add("col","h4","text-dark");

            divCabecera.appendChild(imgPost);
            divCabecera.appendChild(nombrePost);
            divPost.appendChild(divCabecera);


            // div cuerpo post
            const divCuerpo = document.createElement('div');
            divCuerpo.classList.add("row","mt-3");            
            const parrafoPost = document.createElement('p');
            parrafoPost.innerHTML = element.body;
            divCuerpo.appendChild(parrafoPost);
            divPost.appendChild(divCuerpo);


            // div Pie post
            const divPieGlobal = document.createElement('div');
            divPieGlobal.classList.add("row");
            divPost.appendChild(divPieGlobal);

            const divPieIconos = document.createElement('div');
            divPieIconos.classList.add("piePost","m-1");
            divPieGlobal.appendChild(divPieIconos);

            // Iconos post
            const iconoLike = document.createElement('i');
            iconoLike.classList.add("bi","bi-heart","heartIcon");
            // iconoLike.setAttribute("id","heart");
            divPieIconos.appendChild(iconoLike);
            const likeNumber = document.createElement('span');
            likeNumber.classList.add('px-1')
            likeNumber.innerHTML = Math.round(Math.random()* 100);
            divPieIconos.appendChild(likeNumber);
            const iconoShare = document.createElement('i');
            iconoShare.classList.add("bi","bi-share");
            divPieIconos.appendChild(iconoShare);
            const iconoComment = document.createElement('i');
            iconoComment.classList.add("bi","bi-chat-text","px-1");
            divPieIconos.appendChild(iconoComment);


            // Agregamos el post a la columna central
            const columnaCentral = document.querySelector("#col_cen");
            columnaCentral.appendChild(divPost);
        });
        const cora = document.querySelectorAll('.heartIcon')        
        for(let i= 0; i< cora.length; i++){
            cora[i].addEventListener("click", addOrRemovelike);
        }
    }).catch(()=>{
        loader()
    });

function loader(){
    let loaderContainer = document.getElementById('loader');
    loaderContainer.style.display='flex';
    setTimeout( redirect, 3000)       
}

function redirect(){
    history.back ();
}
