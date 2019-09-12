var model = {
    nom: undefined,
    prenom: undefined,
    telephone: undefined,
    email: undefined,
    isValid: function(){
        return this.nom && this.prenom && this.telephone && this.email;
    }
}

var app = {
    init: function(){

        
        this.validation();

        this.addListeners();
    },

addListeners: function() {
    var self = this;

    document.getElementById('nom').addEventListener('blur', function(e){
            var regexName =/[A-Z]{1}[a-z]{1,}/;
            var erreur = "";

            if(!regexName.test(e.target.value)){
                erreur ='Vous n avez pas le bon format de nom';
                model.nom = undefined;
                e.target.classList.add('styleErreur');
                e.target.classList.add('span');

            } else {
                model.nom = e.target.value;
                e.target.classList.remove('styleErreur');
                e.target.classList.remove('span');
            }
            
            document.getElementById('aideNom').textContent = erreur;
            self.validation();

        });

        document.getElementById('prenom').addEventListener('blur', function(e){
            var regexPrenom =/[a-z]/;
            var erreur = "";

            if(!regexPrenom.test(e.target.value)){
                erreur ='Vous n avez pas le bon format de nom';
                model.prenom = undefined;
                e.target.classList.add('styleErreur');
                e.target.classList.add('span');
            } else {
                model.prenom = e.target.value;
                e.target.classList.remove('styleErreur');
                e.target.classList.remove('span');
            }
            
            document.getElementById('aidePrenom').textContent = erreur;
            self.validation();

        });

        document.getElementById('telephone').addEventListener('blur', function(e){
            var regexTel =/[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}/;
            erreur = "";

            if(!regexTel.test(e.target.value)){
                erreur ='Vous n avez pas le bon format de numero';
                model.telephone = undefined;
                // erreur.classList.add('textErreur');
                e.target.classList.add('styleErreur');
                e.target.classList.add('span');
            } else {
                model.telephone = e.target.value;
                e.target.classList.remove('styleErreur');
                e.target.classList.remove('span');
            }
            
            document.getElementById('aideTel').textContent = erreur;
            self.validation();

        });

        document.getElementById('mail').addEventListener('blur', function(e){
            var regexEmail = /.+@.+\..+/;
            erreur = "";

            if(!regexEmail.test(e.target.value)) {
                erreur ='Vous n avez pas le bon format d email';
                document.getElementById('aideMail').textContent = erreur;
                model.email = undefined;
                e.target.classList.add('styleErreur');
                e.target.classList.add('span');
            } else {
                model.email = e.target.value;
                e.target.classList.remove('styleErreur');
                e.target.classList.remove('span');
            }

            document.getElementById('aideMail').textContent = erreur;
            self.validation();

        });

    },
validation: function(){

    var button = document.getElementById('submit');

        if(model.isValid()){
            button.disabled = false;
        } else {
            button.disabled = true;
        }

    }

            
}

app.init();

function reset(){
    var input = document.getElementsByTagName('input');

    var count = input.length;

    for(i= 0; i< count; i++){
        input[0].remove();
    }
}

