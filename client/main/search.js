const searchInput = document.getElementById('search_input');
const searchResult = document.getElementById('userlist_container');

const url = 'http://localhost:3001';

searchInput.addEventListener('input', getUserByName)
searchInput.addEventListener('focusout', closeResult)

async function getUserByName(){
    await fetch(`${url}/search_user/${searchInput.value}`)
    .then(res => res.json())
    .then(users =>{
        if(users.length>0){
            searchResult.firstElementChild?.remove();
            const userList = document.createElement('ul');
            searchResult.appendChild(userList)
            users.forEach(user=>{
                const userItem = document.createElement('li');
                const userLink = document.createElement('a');
                userLink.innerHTML=user.fullName;
                userLink.setAttribute('href',`../Hojatercero/Perfil_terceros.html?id:${user.id}`)
                searchResult.firstElementChild.appendChild(userItem);
                userItem.appendChild(userLink);
            })
        }   
    }).catch(()=>{
        searchResult.firstElementChild?.remove();
    })
    searchResult.style.visibility='visible'
    if(searchInput.value==''){
        searchResult.style.visibility='hidden'
    }
}

function closeResult(){
    searchResult.style.visibility='hidden'
}