let password = document.getElementById('password');
let confirm = document.getElementById('confirm-password')      

let validate = function () {
if(password.value != confirm.value){   
confirm.classList.add('invalid'); 
}
else{
    confirm.classList.remove('invalid');
    confirm.classList.add('valid');
}
}

password.onchange = validate;
confirm.onkeyup = validate;

