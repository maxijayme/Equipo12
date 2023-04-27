const createButton = document.getElementById('create');
const cancelButton = document.getElementById('cancel');

createButton.addEventListener('click', create);
cancelButton.addEventListener('click', cancel);

function create(event){
    event.preventDefault();
    location.href="/main/index.html"
}

function cancel(){
    location.href="/main/index.html"
}