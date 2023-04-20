
const searchInput = document.getElementById('search_input');
const searchResult = document.querySelector('.userlist')
const url = 'http://localhost:3001';

searchInput.addEventListener('input', getUserByName)
async function getUserByName(){
    let params = new URLSearchParams(searchInput.value)
    const users = await fetch(`${url}/search_user/${new URLSearchParams(searchInput.value)}`)
    console.log(users)
    if(users.length>0){
        users.forEach(user=>{
            const userItem = document.createElement('li');
            userItem.innerHTML=user.fullName;
            searchResult.nextElementSibling.appendChild(userItem);
        })
        searchResult.style.display('block')
    }   
}