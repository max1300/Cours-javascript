(function(){

// le namespace est ici initialisé à karam
var karam = {};

// méthode rattaché au namespace karam
// méthode qui retourne un console.log 
// des éléments d'un tableau à 2 dimensions
karam.tabContact = function(tab){
    tab.forEach(function(element) {
        console.log(element.nom);

        element.contact.forEach(value => {
            console.log(value.nom);
            console.log(value.prenom);
        });
    });
}

    // permet de rendre les méthodes du namespace
    // accessible depuis le window
    window.karam = karam;

})();

