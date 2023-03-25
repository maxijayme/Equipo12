
document.querySelector('#post1 i').addEventListener("click", addOrRemovelike);
document.querySelector('#post2 i').addEventListener("click", addOrRemovelike);
document.querySelector('#post3 i').addEventListener("click", addOrRemovelike);

function addOrRemovelike(){
    if(this.classList.contains('bi-heart')){
        this.classList.remove('bi-heart')
        this.classList.add('bi-heart-fill');
        this.classList.add('like');
    }else{
        this.classList.add('bi-heart');
        this.classList.remove('bi-heart-fill')
        this.classList.remove('like')
    }
}

console.log('a')