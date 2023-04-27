const createButton = document.getElementById('create');
const cancelButton = document.getElementById('cancel');
const avatar = document.getElementById('fotoPerfil')
const cloudName = "deirkmhyd";
const uploadPreset = "teclapedia"; 

const phoneInput = document.getElementById('phone')
const linkedinInput = document.getElementById('linkedin')
const cityInput = document.getElementById('city')
const countryInput = document.getElementById('country')

const studies = document.getElementById('studies')
let studiesOption = studies.selectedOptions[0].innerHTML
studies.addEventListener('change',()=>{
  studiesOption = studies.selectedOptions[0].innerHTML
})
const degree = document.getElementById('degree')
const academy = document.getElementById('academy')
const dateStartStudies = document.getElementById('dateStartStudies')
const dateEndtStudies = document.getElementById('dateEndtStudies')
const stillStudying = document.getElementById('stillStudying')
const position = document.getElementById('position')
const company = document.getElementById('company')
const dateStartWorking = document.getElementById('dateStartWorking')
const dateEndWorking = document.getElementById('dateEndWorking')
const stillWorking = document.getElementById('stillWorking')
const tasks = document.getElementById('tasks')

const licence = document.getElementById('licence')
let licenceOption = licence.selectedOptions[0].innerHTML
licence.addEventListener('change',()=>{
  licenceOption = licence.selectedOptions[0].innerHTML
})
const availability = document.getElementById('availability')
const preference = document.getElementById('preference')
let preferenceOption = preference.selectedOptions[0].innerHTML
preference.addEventListener('change',()=>{
  preferenceOption = preference.selectedOptions[0].innerHTML
})
const hobbies = document.getElementById('hobbies')

let photoInput;

stillStudying.addEventListener('change', ()=>{
  if(stillStudying.checked){
    dateEndtStudies.disabled = true;
  }else{
    dateEndtStudies.disabled = false;
  }
})

stillWorking.addEventListener('change', ()=>{
  if(stillWorking.checked){
    dateEndWorking.disabled = true;
  }else{
    dateEndWorking.disabled = false;
  }
})


createButton.addEventListener('click', create);
cancelButton.addEventListener('click', cancel);

const myWidget = cloudinary.createUploadWidget(
    {
      cloudName: cloudName,
      uploadPreset: uploadPreset,
    },
    (error, result) => {
      if (!error && result && result.event === "success") {
        photoInput = result.info.secure_url;
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
  

async function create(event){
  event.preventDefault();
  const userProfile =[{
    id: JSON.parse(localStorage.getItem("userIdTeclapedia"))
    }
    ,{
    photoInput:photoInput || 'https://res.cloudinary.com/deirkmhyd/image/upload/v1682499176/teclapedia/avatar_vh25bz.jpg',
    phoneInput:phoneInput.value,
    linkedinInput:linkedinInput.value,
    cityInput:cityInput.value,
    countryInput:countryInput.value,
    studiesInput:studiesOption,
    },{
      degree:degree.value,
      academy:academy.value,
      dateStartStudies:dateStartStudies.value,
      dateEndtStudies:dateEndtStudies.value || null,
      stillStudying:stillStudying.text
    },{
      position:position.value,
      company:company.value,
      dateStartWorking:dateStartWorking.value,
      dateEndWorking:dateEndWorking.value || null,
      stillWorking:stillWorking.value,
      tasks:tasks.value,
    },{
      licence:licenceOption,
      availability:availability.value,
      preference:preferenceOption,
      hobbies:hobbies.value
    }
  ]
  const response = await fetch(`http://localhost:3001/users/createprofile`,{
    method: "PATCH",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(userProfile)
  })
  const responseJson = await response.json()
  if(responseJson.length>0){
    loader();
  }
}

function loader(){
  let loaderContainer = document.getElementById('loader');
  loaderContainer.style.display='flex';
  setTimeout( redirect, 1500);       
}

function redirect(){
  location.href="/client/main/index.html";
}


function cancel(){
  location.href="/client/main/index.html"
}
