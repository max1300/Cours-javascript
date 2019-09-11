var app = {
    init: function(){
        // on recupere les tags p (qui correspond au paragraphe dans le code HTML)
        // on recupere ce tag avec document.getElementsByTagName.
        // 'document' permet d'avoir accès au code HTML
        // 'getElementsByTagName' permet de recupérer les tags definis dans les 
        // parenthèses.
        var p = document.getElementsByTagName('p');
        

        p[0].addEventListener('mouseover', mouseOver);

        p[0].addEventListener('mouseout', mouseOut);

    }
};

app.init();

// ajouter un élément 
var title1 = document.getElementById('title-1');


// on crée une fonction qui ajoute un paragraphe quand on clique
// sur le titre
title1.addEventListener('click', function() {
    
    // on crée un element HTML du type spécifié par 
    // le tagName qui est ici recupéré par 'var p = document.getElementsByTagName('p')'
    // ainsi indique quel type d'élément doit créer 'document.createElement()'
    p = document.createElement('p');
    
    // on insere du texte HTML dans l'élément créer juste avant
    p.innerHTML = 'Destinatis sine provenisset negotium copia esse praeclarae mora praeclarae integre est pauloque segetum ex etiam cum negotium indolis Romano mora' +
    'actitatum frumentum copia cuius regeret pro actitatum est pro lassatis horreis Africam viri integre novimus indolis actitatum tempore lassatis frumentum praeclarae' + 
    'praeclarae victus actitatum cuius inopia dedit cuius lassatis textum Romano cum postea sine cum Hymetii negotium Romano hunc Hymetii ex lassatis restituit praeclarae' +
    'viri textum negotium victus etiam pauloque provenisset viri frumentum victus segetum indolis victus segetum praeclarae copia frumentum inopia sine ulla iam Hymetii' +
    'novimus lassatis Hymetii Romano populo actitatum indolis frumentum frumentum viri cuius actitatum horreis esse.';

    // on lui adjoint a chaque création la couleur rouge
    // en récupérant une des classes CSS du document HTML
    // ainsi les spécificités de cette classe sont appliqués
    // sur notre élément
    p.classList.add('text-red');

    p.addEventListener('mouseover', mouseOver);

    p.addEventListener('mouseout', mouseOut);

    
    // on finit par ajouter le nouvel element
    // en lui spécifiant qu'il est un enfant de 
    // l'élément d'origine
    document.body.appendChild(p);
})



// on implémente l'event à partir de 'addEventListener 
// à partir des tags récupérer au dessus.
// 'p[0]' correspond au tag et à son emplacement dans une list de tag
// (car 'document.getElementsByTagName('p')' renvoie une list de tag et 
// pas juste un tag en particulier)
function mouseOver(event){
            
    // retourne les coordonnées x et y de la souris
    var x = event.clientX;
    var y = event.clientY;
    console.log(x + ' ' + y);
    // event.target.style.color= 'red';
    
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
        console.log(event.target.classList);
        
    } else {
        console.log('A GAUCHE');

        // le texte perd sa valeur css rouge et est 
        // donc noir
        event.target.classList.remove('text-red');
        console.log(event.target.classList);
    }
};


function mouseOut (event) {
    var x = event.clientX;
    var y = event.clientY;
    console.log(x + ' ' + y);

    
    if(!event.target.classList.contains('text-red')){
        event.target.classList.add('text-red');
    }
    
                
    // event.target.style.color= 'red';
    
    setTimeout(function() {
        event.target.style.color = "";
    }, 500);

    
};


// création d'une méthode qui supprime tous les éléments spécifiés de la page
function supprimer(){
    // on recupère le type de l'élément à supprimer
    // grace au tagName
    var p = document.getElementsByTagName('p');

    // tagName nous crée une liste. 
    // on decide donc de récupérer la longueur de cette list
    // avant d'itérer sur la liste à l'aide
    // du compteur créé.
    // A chaque itération on supprime un élément de la list
    var count = p.length;

    for(i= 0; i< count; i++){
        p[0].remove();
    }
};



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