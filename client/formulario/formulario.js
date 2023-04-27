const createButton = document.getElementById('create');
const cancelButton = document.getElementById('cancel');
const avatar = document.getElementById('fotoPerfil')
const cloudName = "deirkmhyd";
const uploadPreset = "teclapedia"; 


createButton.addEventListener('click', create);
cancelButton.addEventListener('click', cancel);

function create(event){
    event.preventDefault();
    location.href="/main/index.html"
}

function cancel(){
    location.href="/main/index.html"
}

const myWidget = cloudinary.createUploadWidget(
    {
      cloudName: cloudName,
      uploadPreset: uploadPreset,
    },
    (error, result) => {
      if (!error && result && result.event === "success") {
        console.log(result.info.secure_url)
        avatar.setAttribute('src',result.info.secure_url);
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
  

