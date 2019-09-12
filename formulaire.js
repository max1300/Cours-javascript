// creation d'un objet 'model' avec des attributs définis
// et une fonction isValid() qui nous permet de controler
// si les attributs ne sont plus undefined
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

        // on fait appel a validation une premiere fois
        // ce qui a pour effet de rendre l'input 'envoyer'
        // invalide car tous les champs sont vides
        this.validation();

        // on ajoute la fonction addListeners() qui permet d'écouter
        // tous les events
        this.addListeners();
    },

    // function addListeners() qui permet d'ajouter
    // une gestion d'évenement à l'élément spécifié
    // Ainsi on controle l'événement et sa reaction
    addListeners: function() {
        
        // permet de rendre accessible le this de context 
        // a toutes les méthodes qui suivent
        var self = this;

        // on ajoute une gestion d'événement
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
    // fonction de validation()   
    validation: function(){
        // on recupere l'input 'envoyer au travers
        // de l'id submit et on le stocke dans une variable
        // button
        var button = document.getElementById('submit');

            // on effectue un controle de la fonction isValid()
            // contenue dans l'objet 'model'.
            // Si le model est valide alors le button est
            // undisabled sinon il est disabled
            if(model.isValid()){
                button.disabled = false;
                alert('ca a été envoyé gros!')
            } else {
                button.disabled = true;
            }

    }

                
}

app.init();

// fonction reset() qui supprime tous les champs
// déjà remplis
function reset(){
    var input = document.getElementsByTagName('input');

    var count = input.length;

    for(i= 0; i< count; i++){
        input[0].remove();
    }
}

