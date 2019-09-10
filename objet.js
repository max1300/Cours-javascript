// apprentissage concernant les objets


// creation d'un objet
var formationJS = {
    nom: 'Module JavaScript',
    langage: 'JavaScript',
    dateDebut: '09/09/2019',
    dateFin: '20/09/2019',
    description: function() {
        // le 'this' correspond au contexte de l'objet
        // ATTENTION : mais pas à une instance de classe comme en JAVA
        return 'Le ' + this.nom + ' commence le: ' + this.dateDebut + ' , et se termine le: ' + this.dateFin;
        
    },
    stagiaires: [{
        nom:'Nom Exemple',
        prenom: 'Prenom Exemple'
    }]
};


// affichage simple par concatenation des elements de l'objet
console.log('nom: ' + formationJS.nom + '\n' + 'langage: ' +
                formationJS.langage + '\n' + 'date de début de la formation: ' + 
                formationJS.dateDebut + '\n' + 'date de fin de la formation: ' + 
                formationJS.dateFin
);


// ajout d'un élément dans l'objet 
formationJS.formateur = [{
    nom: 'Hodicq',
    prenom: 'Nicolas'
}];


// lecture simple et basique pour lire un élément d'un objet qui contient lui-même un tableau
console.log('formateur: ' + formationJS.formateur[0].nom + ' ' + formationJS.formateur[0].prenom);


// seconde manière de lire un élément d'un objet qui contient lui-même un tableau.
// on choisi d'affecter la valeur de chaque élément du tableau à l'interieur d'une variable :
// ici selectedNom et selectedPrenom
var selectedNom = formationJS.formateur[0].nom;
var selectedPrenom = formationJS.formateur[0].prenom;
console.log('formateur: ' + selectedNom + ' ' + selectedPrenom);


// lecture d'une fonction définie dans un objet
console.log(formationJS.description());


// suppression d'un élément d'un tableau
delete formationJS.stagiaires;


// creation d'une fonction afficher qui retourne les éléments contenu dans l'objet
function afficher(object) {
    var affichage = "";
    for (var value in object) {
      if (object.hasOwnProperty(value)) {
          affichage += object[value] + "\n";
      }
    }
    return affichage;
  }

console.log(afficher(formationJS));


// si on regarde dans la console du navigateur, on peut voir "_proto_ : Object"
// qui montre de quel objet hérite mon objet. 
// L'objet qu'on appelle hérite de son parent. Le parent 'ultime' est 'Object'
// Si on appelle une propriété d'un objet qui n'est pas définie dans ce même objet
// alors on va remonter la chaine parente de prototype jusqu'a tomber sur une propriété 
// qui correspond dans les prototypes parents (on peut aller au max jusqu'à Object)
console.log(formationJS);