console.log('Test sur le fichier objet-second.js');

// on teste les scopes avec un second fichier pour 
// se former sur la portée des variables en JS.
// cette section de code (à partir du CODE START)
// est en lien avec la section scopes de objet.js
console.log(nom);

function sayHello(){
    var nom = 'Nico 2';
    console.log('Nom: ' + nom);
}

sayHello();

nom = 'Nom Renaud à changer';

sayHello();
console.log('Nom: ' + nom);





