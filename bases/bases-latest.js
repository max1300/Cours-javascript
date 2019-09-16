console.log('hjfgrehgurhgu');

var mavariable= 10;
console.log('Ma variable :', mavariable);

mavariable= 'Formation module';
console.log(mavariable);

mavariable= undefined;
console.log(mavariable);

mavariable= null;
console.log(mavariable);

mavariable= {type:"nom", model: "module JavaScript"};
mavariable.type;
mavariable['type'];
console.log(mavariable);

var x = 20;
var y = 'formation';

console.log(y + x + 5);

var array = [1, 2, 3, 4 ,5, 6 , 7, 8, 9, 10];

array.forEach(function(element) {
    if(element%2 === 0){
       console.log(element); 
    }
});


var array = [
    {
        nom: 'javascript',
        stagiaires : [
            {
                nom: 'bob'
            },
            {
                nom: 'max'
            },
            {
                nom: 'karam'
            }
        ]
    },
    {
        nom: 'java',
        stagiaires : [
            {
                nom: 'max'
            },
            {
                nom: 'kelly'
            },
            {
                nom: 'karam'
            }
        ]
    }
]

array.forEach(function(objet, index) {
    console.log('index', index)
    console.log(objet.nom);
    
        objet.stagiaires.forEach(element => {
            console.log(element.nom);
        });
});


function throwError () {
         
}
            
            

function multiply(p1, p2){
    if(isNaN(p1) || isNaN(p2) ){
        throw new Error('Vous ne pouvez multiplier que des valeurs numériques');
    } else{
        console.log(p1*p2);
        console.log('nombre d\'arguments :' + arguments.length);
    }
    
    
}

try{
    multiply(2, 5);
} catch (e){
    console.error(e);
}


(function(){
    alert('auto-invoqué')
})();



var hello = function(name){
    console.log('hello ' + name);
};


// function asyncWithCallback(name, callback){
//     if (callback && typeof callback === 'function') {
//         setTimeout(callback, 5000, name);  
//     }       

// }

function asyncSayHello (name, callback) {
    if (callback && typeof callback === 'function') { 
        setTimeout(callback, 5000, name);         
    }
}     

asyncSayHello('Niko', hello);
    

function palindrome(str){
    var strReverse = '';
    strReverse = str.split('').reverse().join('');


    if(str < strReverse){
        return false;
    } else if (str > strReverse){
        return false;
    } else {
        return true;
    }
}


console.log(palindrome('home'));


function anagrams(strA, strB){
    var regex = /!/g;


    // strATab = strA.split('');
    // strBTab = strB.split('');

    // var count;

    // if(strATab.length > strBTab.length){
    //     count = strATab.length;
    // } else {
    //     count = strBTab.length;
    // }

    // for(i= 0; i< count; i++){
    //     if(strATab[i] === '!'){
    //         strATab[i] = '';
    //     }
        
    //     if(strBTab[i] === '!'){
    //         strBTab[i] = '';
    //     }
    // }

    // strJoinA = strATab.join('');
    // strJoinB = strBTab.join('');
    
   

    

    // strARep = strA.replace(regex, '');
    // strARep1 = strA
    

    strReverseA = strA.replace(regex, '').trim().toLowerCase().split('').sort().join('');
    strReverseB = strB.replace(regex, '').trim().toLowerCase().split('').sort().join('');

    if(strReverseA === strReverseB){
        return true;
    } else {
        return false;
    }


}

console.log(anagrams('rail safety', 'fairy tales'));
console.log(anagrams('RAIL! SAFETY!', 'fairy tales'));
console.log(anagrams('Hi there', 'Bye there'));



