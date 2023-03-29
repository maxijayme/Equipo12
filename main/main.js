document.querySelector('#post1 i').addEventListener("click", addOrRemovelike);
document.querySelector('#post2 i').addEventListener("click", addOrRemovelike);
document.querySelector('#post3 i').addEventListener("click", addOrRemovelike);

let like = document.querySelector('#post1 span')

function addOrRemovelike(target){
    if(this.classList.contains('bi-heart')){
        this.classList.remove('bi-heart')
        this.classList.add('bi-heart-fill');
        this.classList.add('like');
        if(target.target.nextElementSibling.innerHTML == 0){
            target.target.nextElementSibling.style.display = 'contents'
        }
        target.target.nextElementSibling.innerHTML = parseInt(target.target.nextElementSibling.innerHTML) + 1;
    }else{
        this.classList.add('bi-heart');
        this.classList.remove('bi-heart-fill')
        this.classList.remove('like')
        target.target.nextElementSibling.innerHTML = parseInt(target.target.nextElementSibling.innerHTML) - 1;
        if(target.target.nextElementSibling.innerHTML == 0){
            target.target.nextElementSibling.style.display = 'none';
        }
    }
}

console.log('a')