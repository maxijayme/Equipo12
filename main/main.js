document.querySelector('#post1 i').addEventListener("click", captureLikes);
document.querySelector('#post2 i').addEventListener("click", captureLikes);
document.querySelector('#post3 i').addEventListener("click", captureLikes);

function captureLikes(target){
    let targetT =  target.target;
    return new Promise(function(resolve, reject){
        let res = addOrRemovelike(targetT);
        res != null ? resolve(res) : reject()
        }
    )
    .then(likes => console.log(`El post ${likes[1]} tiene ${likes[0]} "Me gusta"`))
    .catch()
    
}

function addOrRemovelike(targetT){
    let id = targetT.parentElement.parentElement.parentElement.id;
    let likes;
    if(targetT.classList.contains('bi-heart')){
        targetT.classList.remove('bi-heart')
        targetT.classList.add('bi-heart-fill');
        targetT.classList.add('like');
        if(targetT.nextElementSibling.innerHTML == 0){
            targetT.nextElementSibling.style.display = 'contents'
        }
        likes = parseInt(targetT.nextElementSibling.innerHTML) + 1;
        targetT.nextElementSibling.innerHTML = likes;
    }else{
        targetT.classList.add('bi-heart');
        targetT.classList.remove('bi-heart-fill')
        targetT.classList.remove('like')
        likes = parseInt(targetT.nextElementSibling.innerHTML) - 1;
        targetT.nextElementSibling.innerHTML = likes;
        if(targetT.nextElementSibling.innerHTML == 0){
            targetT.nextElementSibling.style.display = 'none';
        }
    }
    let response = [likes, id]
    return response;
}