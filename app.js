
// form blur event listeners( blur meaning -When entry is done and we go to other )
document.getElementById('name').addEventListener('blur',validatename);
document.getElementById('zipcode').addEventListener('blur',validatezip);
document.getElementById('email').addEventListener('blur',validateemail);
document.getElementById('phone').addEventListener('blur',validatephone);

function validatename(){
    
    const name = document.getElementById('name');
    const re = /^[a-zA-Z ]{2,20}$/;

    if(!re.test(name.value)){
        name.classList.add('is-invalid');
    }
    else{
        name.classList.remove('is-invalid');
    }

}
function validatezip(){

    const zipcode = document.getElementById('zipcode');
    const re = /^([0-9]{6}(-[0-9])?)$/;

    if(!re.test(zipcode.value)){
        zipcode.classList.add('is-invalid');
    }
    else{
        zipcode.classList.remove('is-invalid');
    }

}
function validateemail(){

    const email = document.getElementById('email');
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if(!re.test(email.value)){
        email.classList.add('is-invalid');
    }
    else{
        email.classList.remove('is-invalid');
    }

}
function validatephone(){


    const zipcode = document.getElementById('phone');
    const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

    if(!re.test(phone.value)){
        zipcode.classList.add('is-invalid');
    }
    else{
       phone.classList.remove('is-invalid');
    }
}


