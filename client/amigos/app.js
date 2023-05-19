
const actualUser = localStorage.getItem("userIdTeclapedia"); 
const result = document.getElementById('result')
const filter = document.getElementById('filter')
const navImg = document.getElementById('navImg');
const fullname = document.getElementById('fullname');
const userName = document.getElementById('userName');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const linkedin = document.getElementById('linkedin');
const city  = document.getElementById('city');
const navphoto  = document.getElementById('navphoto');
const registerDate  = document.getElementById('registerDate');
const thirdPersonPhoto  = document.getElementById('thirdPersonPhoto');
const profile_photo = document.getElementById('profile_photo');
const chat_avatar = document.getElementById('chat_avatar');
const url = 'http://localhost:3001';
const listItems = []
let avatar;

async function getUserById(){
  await fetch(`${url}/users/${actualUser}`)
  .then(data => data.json())
  .then(data =>{
      fullname.innerHTML= data[0].fullname
      userName.innerHTML= data[0].username
      phone.innerHTML= data[0].phone
      email.innerHTML= data[0].email
      linkedin.innerHTML= data[0].linkedin
      city.innerHTML= data[0].city
      avatar=data[0].photo
      thirdPersonPhoto.setAttribute('src',avatar)
      navphoto.setAttribute('src',avatar)
      chat_avatar.setAttribute('src',avatar)
      profile_photo.setAttribute('src',avatar)
  }).catch()
}

getData()
getUserById()



filter.addEventListener('input', (e) => filterData(e.target.value))

async function getData() {
  const res = await fetch('https://randomuser.me/api?results=50')

  const { results } = await res.json()

  // Clear results
  result.innerHTML = ''

  results.forEach(user => {
    const li = document.createElement('li')

    listItems.push(li)

    li.classList.add('friend_container')
    li.innerHTML = `
        <img src="${user.picture.large}" alt="${user.name.first}">
        <div class="user-info">
          <h4>${user.name.first} ${user.name.last}</h4>
          <p>${user.email}</p>
          <button class="confirm_add">Añadir</button>
        </div>
      `

      result.appendChild(li)
  })
}

function filterData(searchTerm) {
  listItems.forEach(item => {
    if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.classList.remove('hide')
    } else {
      item.classList.add('hide')
    }
  })
}