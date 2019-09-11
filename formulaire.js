var app = {
    init: function(){

    document.getElementById('nom').addEventListener('blur', validateName);
    
    document.getElementById('telephone').addEventListener('blur', validateTel);

    document.getElementById('mail').addEventListener('blur', validateMail);

    document.getElementById('inscription').addEventListener('submit', validateForm);

    }
}

var erreur;

function validateName(e){
    var regexName =/[A-Z]{1}[a-z]{1,}/;
    
    if(regexName.test(e.target.value)){
        document.getElementById('nom').style.backgroundColor = 'white';
        document.getElementById('nom').style.color = 'black';
        erreur = '';
        document.getElementById('aideNom').textContent = erreur;

    }else if(!regexName.test(e.target.value)){
        erreur ='Vous n avez pas le bon format de nom';
        document.getElementById('aideNom').textContent = erreur;
        document.getElementById('aideNom').style.color = 'red';
        document.getElementById('nom').style.backgroundColor = 'red';
        document.getElementById('nom').style.color = 'white';
    } 
}


function validateTel(e){
    var regexTel =/[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}/;
    
    if(regexTel.test(e.target.value)){
        document.getElementById('telephone').style.backgroundColor = 'white';
        document.getElementById('telephone').style.color = 'black';
        erreur = '';
        document.getElementById('aideTel').textContent = erreur;
    
    
    }else if(!regexTel.test(e.target.value)){
        console.log(validationTel.length);
        erreur ='Vous n avez pas le bon format de numero';
        document.getElementById('aideTel').textContent = erreur;
        document.getElementById('aideTel').style.color = 'red';
        document.getElementById('telephone').style.backgroundColor = 'red';
        document.getElementById('telephone').style.color = 'white';

    }
}


function validateMail(e){
    var regexEmail = /.+@.+\..+/;

    if(regexEmail.test(e.target.value)){
        document.getElementById('mail').style.backgroundColor = 'white';
        document.getElementById('mail').style.color = 'black';
        erreur = '';
        document.getElementById('aideMail').textContent = erreur;
    
    }else if(!regexEmail.test(e.target.value)) {
        erreur ='Vous n avez pas le bon format d email';
        document.getElementById('aideMail').textContent = erreur;
        document.getElementById('aideMail').style.color = 'red';
        document.getElementById('mail').style.backgroundColor = 'red';
        document.getElementById('mail').style.color = 'white';
    }

}


function reset(){
    var input = document.getElementsByTagName('input');

    var count = input.length;

    for(i= 0; i< count; i++){
        input[0].remove();
    }
}

function validateForm(e){
    if(erreur){
        e.preventDefault();
        alert('Votre formulaire doit être valide afin d être envoyé');
    } else{
        alert('Formulaire envoyé');
    }
}
    