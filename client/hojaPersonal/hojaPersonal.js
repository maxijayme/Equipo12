const userPhoto = document.getElementById('profilePhoto');
const userPhone = document.getElementById('phone');
const userEmail = document.getElementById('email');
const userLinkedin = document.getElementById('linkedin')
const jobsContainer = document.getElementById('jobs');
const studiesContainer = document.getElementById('studies');
const otherDataContainer = document.getElementById('otherData');
const photoNavBar = document.getElementById('photoNavBar');

const actualUser = localStorage.getItem("userIdTeclapedia");

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

function redirect(){
    location.href="/client/register/index.html";
}

function loader(){
    let loaderContainer = document.getElementById('loader');
    loaderContainer.style.display='flex'  
}
function closingSession(){
    let option2 = confirm("Estás segur@ que cerrar sesión?")
    if(option2 === true){
        localStorage.removeItem('userIdTeclapedia')
        loader2()
        setTimeout( redirect, 3000)       
    }
}

function loader2(){
    let loaderContainer = document.getElementById('loader2');
    loaderContainer.style.display='flex'  
}

// llamada para coger los datos
async function getUserData(){
    await fetch('http://localhost:3001/profile/'+"3")
    .then(data=> data.json())
    .then(data=>{
        console.log(data)
        
        // personal data
        const contact = data[0]
        photoNavBar.setAttribute("src",contact[0].photo);
        userPhoto.setAttribute("src",contact[0].photo);
        contact[0].phone && (userPhone.innerHTML=contact[0].phone);
        contact[0].email && (userEmail.innerHTML=contact[0].email);
        contact[0].linkedin && (userLinkedin.innerHTML=contact[0].linkedin);
        // experience
        const jobs = data[1];
        jobs.forEach(job => {
            const newJob = document.createElement('div');
            let endJob = (job.actualidad ? "actualidad" : job.f_fin);
            newJob.innerHTML=`
                <div class="row m-2 d-flex">
                    <h4>${job.puesto}</h4>
                    <h5>${job.empresa}</h5>
                    <h6>${job.f_inicio} --- ${endJob}</h6>
                    <p>${job.funciones}</p>
                </div>`;
            jobsContainer.appendChild(newJob);
        });

        //degrees
        const degrees = data[2];
        degrees.forEach(degree=>{
            const newDegree = document.createElement('div');
            let endDegree = (degree.actualidad ? "actualidad" : degree.f_fin);
            newDegree.innerHTML=`
                <div class="row m-2 d-flex">
                    <h4>${degree.titulo}</h4>
                    <div class="row">
                        <h5 class="col">${degree.centro}</h5>
                        <h6 class="col">${degree.f_inicio} - ${endDegree}</h6>
                    </div>
                </div>`;
            studiesContainer.appendChild(newDegree);
        });

        // other data
        const otherData = data[3];
        const newData = document.createElement('div');
        let available = (otherData[0].disponibilidad ? "Sí" : "No");
        let licence = (otherData[0].licencia ? otherData[0].licencia:"No");
        console.log(otherData);
        newData.innerHTML= `<div class="row m-2 d-flex">
                                <div class="col">
                                    <h5>Hobbies</h5>
                                    <p>${otherData[0].hobbies}</p>
                                </div>
                                <div class="col">
                                    <h5>Carnet</h5>
                                    <p>${licence}</p>
                                </div>
                                <div class="col">
                                    <h5>Disponibilidad Inmediata</h5>
                                    <p>${available}</p>
                                 </div>
                                 <div class="col">
                                    <h5>Preferencia</h5>
                                    <p>${otherData[0].preferencia}</p>
                                </div>
                            </div>`;
        otherDataContainer.appendChild(newData)
    })
    .catch(console.error)
}

getUserData();