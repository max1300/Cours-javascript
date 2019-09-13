



var app = {
    init: function(){
        this.emptyList();
        
        
    },
    emptyList: function(){
        
        var inputs = document.getElementsByClassName('box');

        console.log('compte : ' + inputs.length)
        if(inputs.length === 0){
            var emptyMessage = document.createElement('p');
            emptyMessage.classList.add('empty');
            emptyMessage.id = 'empty';
            emptyMessage.innerHTML = 'Votre liste est vide';
            document.body.appendChild(emptyMessage);

        } else if (inputs.length > 0){
            
            
        }
    }

}


function createNewTask(){
    var li = document.createElement('li');
    liste.appendChild(li);

    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'box';
    checkbox.name = 'name';
    checkbox.id = 'id';
    checkbox.onclick = textBarre;
    li.appendChild(checkbox);
    
    var label = document.createElement('label');
    var text = document.createTextNode(document.getElementById('myInput').value);
    label.appendChild(text);
    li.appendChild(label);
    
    var espace = document.createElement('br');
    liste.appendChild(espace);
}


var liste = document.getElementById("liste");

function textBarre(){
    var labels = document.getElementsByTagName('label');
    var inputs = document.getElementsByClassName('box');
    
    for(i = 0; i < inputs.length; i++){

        if(inputs[i].checked == true){
            labels[i].classList.add('texte-barre');
           
        } else {
            labels[i].classList.remove('texte-barre');
            
        }
    }
            
}


function supprimer(){

    var li = document.getElementsByTagName('li');
    var inputs = document.getElementsByClassName('box');
    
    var count = li.length;

    for(i = 0; i < count; i++){
        var suppress = false;

        if(inputs[i].checked === true){
            suppress = true;
        } else {
            suppress = false;
        }

        if(suppress == true){
            li[0].remove();
        }
            
            
            console.log(li.length)
        


    }

}







