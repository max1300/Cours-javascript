var app = {
    init: function(){

    document.getElementById('nom').addEventListener('input', validateName);
    
    document.getElementById('telephone').addEventListener('input', validateTel);


    document.getElementById('mail').addEventListener('input', validateMail);


    }

    
}

function validateName(e){
    var regexName =/[A-Z]{1}[a-z]{1,}/;
    var validationNom = '';

    document.getElementById('nom').style.backgroundColor = 'red';
    document.getElementById('nom').style.color = 'white';

    if(!regexName.test(e.target.value)){
        validationNom ='Vous n avez pas le bon format de nom';
        
    }

    document.getElementById('aideNom').textContent = validationNom;
    document.getElementById('aideNom').style.color = 'red';

}


function validateTel(e){
    var regexTel =/[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}/;
    var validationTel = '';

    if(!regexTel.test(e.target.value)){
        console.log(validationTel.length);
        validationTel ='Vous n avez pas le bon format de numero';
        document.getElementById('telephone').style.backgroundColor = 'red';
        document.getElementById('telephone').style.color = 'white';

    }

    document.getElementById('aideTel').textContent = validationTel;
    document.getElementById('aideTel').style.color = 'red';
    
}


function validateMail(e){
    var regexEmail = /.+@.+\..+/;
    var validationEmail = '';

    document.getElementById('mail').style.backgroundColor = 'red';
    document.getElementById('mail').style.color = 'white';

    if(!regexEmail.test(e.target.value)) {
        validationEmail ='Vous n avez pas le bon format d email';
    }

    document.getElementById('aideMail').textContent = validationEmail;
    document.getElementById('aideMail').style.color = 'red';
    

}


function reset(){
    var input = document.getElementsByTagName('input');

    var count = input.length;

    for(i= 0; i< count; i++){
        input[0].remove();
    }
}

function validateForm(){
    var form = document.querySelector('form');


    if(form.elements['nom'].value !=''){
        return true;
    }
}
    