let slideElement = document.querySelector('#slider');
let buttonElement = document.querySelector('#button');

let sizePassword = document.querySelector('#valor');
let password = document.querySelector('#password');

let containerPassword = document.querySelector('#container-password');

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@";
let novaSenha = "";

sizePassword.innerHTML = slideElement.value;

slider.oninput = function(){
    sizePassword.innerHTML = this.value;
}

function generatePassword(){
    let pass =""
    for(let i = 0, n = charset.length; i < slideElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n))
        
    }
    document.querySelector('.tooltip').style.display = 'block'
    document.querySelector('.copied').style.display = 'none'
    containerPassword.classList.remove('hide')
    password.innerHTML = pass;
    novaSenha = pass;

}

function copyPassword(){
    navigator.clipboard.writeText(novaSenha);
    document.querySelector('.tooltip').style.display = 'none'
    document.querySelector('.copied').style.display = 'block'


}