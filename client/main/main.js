const thirdPersonPhoto = document.getElementById('thirdPersonPhoto');
const postImg = document.getElementById('postImg');
const navImg = document.getElementById('navImg');
const fullname = document.getElementById('fullname');
const userName = document.getElementById('userName');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const linkedin = document.getElementById('linkedin');
const city  = document.getElementById('city');
const registerDate  = document.getElementById('registerDate');
const actualUser = localStorage.getItem("userIdTeclapedia");

const url = 'http://localhost:3001';

let avatar;

async function getUserById(){
    await fetch(`${url}/users/${actualUser}`)
    .then(data => data.json())
    .then(data =>{
        avatar = data[0].photo
        thirdPersonPhoto.setAttribute('src',avatar)
        postImg.setAttribute('src',avatar)
        navImg.setAttribute('src',avatar)
        fullname.innerHTML= data[0].fullname
        userName.innerHTML= data[0].username
        phone.innerHTML= data[0].phone
        email.innerHTML= data[0].email
        linkedin.innerHTML= data[0].linkedin
        city.innerHTML= data[0].city
    }).catch()
}

getUserById()

export function addButtonFuntionality(){
    const allpost = document.querySelectorAll('.post i')
    for(let i=0; i< allpost.length;i++){
        allpost[i].addEventListener("click", captureLikes);
    }
}

addButtonFuntionality()

function captureLikes(target){
    let targetT =  target.target;
    return new Promise(function(resolve, reject){
        let res = addOrRemovelike(targetT);
        res != null ? resolve(res) : reject("Es imposible!")
        }
    )
    .then(likes => console.log(`El post ${likes[1]} tiene ${likes[0]} "Me gusta"`))
    .catch()
    
}

function addOrRemovelike(targetT){
    let id = targetT.parentElement.parentElement.parentElement.id;
    let likes;
    if(targetT.classList.contains('bi-heart')){
        targetT.classList.remove('bi-heart')
        targetT.classList.add('bi-heart-fill');
        targetT.classList.add('like');
        if(targetT.nextElementSibling.innerHTML == 0){
            targetT.nextElementSibling.style.display = 'contents'
        }
        likes = parseInt(targetT.nextElementSibling.innerHTML) + 1;
        targetT.nextElementSibling.innerHTML = likes;
    }else{
        targetT.classList.add('bi-heart');
        targetT.classList.remove('bi-heart-fill')
        targetT.classList.remove('like')
        likes = parseInt(targetT.nextElementSibling.innerHTML) - 1;
        targetT.nextElementSibling.innerHTML = likes;
        if(targetT.nextElementSibling.innerHTML == 0){
            targetT.nextElementSibling.style.display = 'none';
        }
    }

    let response = [likes, id]
    return response;
}

async function getPosts(){
    await fetch(`${url}/post`)
    .then(data => data.json())
    .then(data =>{
        data.forEach(post =>{
            const posted = document.createElement('div')
            posted.innerHTML=`<div class="post container p-3 mb-3" id="post${post.id_publicacion}">
                                <div class="row d-flex flex-nowrap justify-content-left align-items-center">                                    
                                    <img src=${post.photo} alt="fotoUsuario" class="photoPost  img-fluid"/>                                
                                    <div class="post_header">
                                        <p class="col h4 text-dark">${post.fullname}</p> 
                                        <p></p>           
                                    </div>                 
                                </div>
                                <div class="row m-2">
                                    <p>${post.texto_publicacion}</p>
                                </div>
                                <div class="text-center">
                                     <img src=${post.imagen_publicacion} class="img-fluid mx-auto d-block"> 
                                </div>
                                <div class="row">
                                    <div class="piePost m-1">
                                        <i class="bi bi-heart"></i>
                                        <span>${post.likes}</span>
                                        <i class="bi bi-share"></i>
                                    </div>
                                </div>
                            </div>`
            newpost.parentNode.insertBefore(posted, newpost.nextSibling)
            postContent.value='';
            addButtonFuntionality();
            }
            
        )
    })
    .catch(console.error)
}
function nativeShare() {
    if (navigator.share) { 
       navigator.share({
          title: "titulo",
          text: "texto",
          url: "URL", 
       }) 
    }
    return false;
 }

const share = document.querySelectorAll('.bi-share');
for(let i = 0; i< share.length;i++){
    share[i].addEventListener('click', nativeShare)
}

getPosts()