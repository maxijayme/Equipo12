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
                userItem.innerHTML=user.fullName;
                searchResult.firstElementChild.appendChild(userItem);
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