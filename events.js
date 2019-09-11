var app = {
    init: function(){
        // on recupere les tags p (qui correspond au paragraphe dans le code HTML)
        // on recupere ce tag avec document.getElementsByTagName.
        // 'document' permet d'avoir accès au code HTML
        // 'getElementsByTagName' permet de recupérer les tags definis dans les 
        // parenthèses.
        var p = document.getElementsByTagName('p');


        // on implémente l'event à partir de 'addEventListener 
        // à partir des tags récupérer au dessus.
        // 'p[0]' correspond au tag et à son emplacement dans une list de tag
        // (car 'document.getElementsByTagName('p')' renvoie une list de tag et 
        // pas juste un tag en particulier)
        p[0].addEventListener('mouseover', function(event) {
            
            // retourne les coordonnées x et y de la souris
            var x = event.clientX;
            var y = event.clientY;
            console.log(x + ' ' + y);
            // MouseEvent.target.style.color= 'blue';
            
            // permet de réaliser l'event pendant
            // un temps donné
            setTimeout(function() {
                event.target.style.color = "";
            }, 500);
            
            // on calcule la moyenne 
            // la moyenne correspond à la moitié de l'écran
            // on accède à la largeur totale de l'écran avec 
            // window.innerWidth qui récupère la largeur du 
            // contenu visible de la fenêtre de navigation
            moyenne = window.innerWidth /2;
            
            // on regarde si la souris est dans une position 
            // plus grande ou moins grande que la moyenne
            // si elle est à une position de X (abcisse) plus grande 
            // alors on indique que la souris est à droite
            // sinon c'est qu'elle est à gauche.
            // On utilise une structure de controle pour faire cela.
            if(event.clientX > moyenne){
                console.log('A DROITE');

                // le texte devient rouge
                // la target étant 'text-red', on utilise event.target.classList.add() ou .remove()
                // pour accéder au point d'entrée des modifications
                event.target.classList.add('text-red');
                
            } else {
                console.log('A GAUCHE');

                // le texte perd sa valeur css rouge et est 
                // donc noir
                event.target.classList.remove('text-red');
            }
        }, false);


        
        p[0].addEventListener('mouseout', function(MouseEvent) {
            var x = MouseEvent.clientX;
            var y = MouseEvent.clientY;
            console.log(x + ' ' + y);
            MouseEvent.target.style.color= 'orange';
            
            setTimeout(function() {
                MouseEvent.target.style.color = "";
            }, 500);
        }, false);



        p[0].addEventListener('mouseover', function(event){

            console.log(event);

           

        });


    }
};

app.init();


function test (nom, cb) {

    setTimeout(function () {
        cb({
            nom: 'test'
        })

    }, 1000);

} 

test('mouseover', function (event) {
    console.log('callback run', event);
})