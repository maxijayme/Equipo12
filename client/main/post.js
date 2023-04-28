import { addButtonFuntionality } from "./main.js";
const actualUser = localStorage.getItem("userIdTeclapedia");
const postBtn = document.getElementById('postBtn');
const postContent = document.getElementById('postContent');
const newpost = document.getElementById('newpost')
let postId = 3;
const url = 'http://localhost:3001';

postBtn.addEventListener('click', newPost);


// async function newPost(){
//                 const diffTime = await fetch(url)
//                 .then(data => data.json())
//                 .then(response => {
//                     return response.time})
//                 const posted = document.createElement('div')
//                 posted.innerHTML=`<div class="post container p-3 mb-3" id="post${postId++}">
//                                     <div class="row d-flex flex-nowrap justify-content-left align-items-center">
//                                         <img src="./img/avatar.jpg" alt="fotoUsuario" class="photoPost  img-fluid"/>
//                                         <div class="post_header">
//                                             <p class="col h4 text-dark">Lucia Sanchez</p> 
//                                             <p>${diffTime}</p>           
//                                         </div>                 
//                                     </div>
//                                     <div class="row">
//                                         <p>${postContent.value}</p>
//                                     </div>
//                                     <div class="row">
//                                         <div class="piePost m-1">
//                                             <i class="bi bi-heart"></i>
//                                             <span style="display: none;">0</span>
//                                             <i class="bi bi-share"></i>
//                                         </div>
//                                     </div>
//                                 </div>`
//             newpost.parentNode.insertBefore(posted, newpost.nextSibling)
//             postContent.value='';
//             addButtonFuntionality();
// }


const cloudName = "deirkmhyd";
const uploadPreset = "teclapedia"; 
let photoInput;
const attachedImg = document.getElementById('attachedImg')

const myWidget = cloudinary.createUploadWidget(
    {
      cloudName: cloudName,
      uploadPreset: uploadPreset,
    },
    (error, result) => {
      if (!error && result && result.event === "success") {
        let filename = result.info.public_id;
        photoInput = result.info.secure_url;
        attachedImg.innerHTML= filename.slice(filename.indexOf('/')+1,);
      }
    }
  );
  
  document.getElementById("upload_widget").addEventListener(
    "click",
    function () {
      myWidget.open();
    },
    false
);


postBtn.addEventListener('click', newPost);
let postData={
    userId: actualUser,
    postText:'',
    postImg:''
}

async function newPost(){
    postData.text = postContent.value;
    photoInput && (postData.img = photoInput);
    const response = await fetch(`http://localhost:3001/post`,{
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(postData)
    })
    postContent.value = '';
    filename.innerHTML = '';
    const responseJson = await response.json()
}
