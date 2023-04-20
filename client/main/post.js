import { addButtonFuntionality } from "./main.js";
const postBtn = document.getElementById('postBtn');
const postContent = document.getElementById('funciones');
const newpost = document.getElementById('newpost')
let postId = 3;
const url = 'http://localhost:3001';

postBtn.addEventListener('click', newPost);


async function newPost(){
                const diffTime = await fetch(url)
                .then(data => data.json())
                .then(response => {
                    return response.time})
                const posted = document.createElement('div')
                posted.innerHTML=`<div class="post container p-3 mb-3" id="post${postId++}">
                                    <div class="cabeceraPost row d-flex flex-nowrap justify-content-left align-items-center">
                                        <img src="./img/avatar.jpg" alt="fotoUsuario" class="fotoPost  img-fluid"/>
                                        <div class="post_header">
                                            <p class="col h4 text-dark">Lucia Sanchez</p> 
                                            <p>${diffTime}</p>           
                                        </div>                 
                                    </div>
                                    <div class="row">
                                        <p>${postContent.value}</p>
                                    </div>
                                    <div class="row">
                                        <div class="piePost m-1">
                                            <i class="bi bi-heart"></i>
                                            <span style="display: none;">0</span>
                                            <i class="bi bi-share"></i>
                                        </div>
                                    </div>
                                </div>`
            newpost.parentNode.insertBefore(posted, newpost.nextSibling)
            postContent.value='';
            addButtonFuntionality();
}
