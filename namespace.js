(function(){

var karam = {};
karam.tabContact = function(tab){
    tab.forEach(function(element) {
        console.log(element.nom);

        element.contact.forEach(value => {
            console.log(value.nom);
            console.log(value.prenom);
        });
    });
}

    window.karam = karam;

})();

