
var app = {
    init: function(){
        this.emptyList();
    },
    emptyList: function(){
        var p  = document.getElementById('nique-ta-mere');
        var li = document.getElementsByTagName('li');
        if(li && li.length > 0){
            p.style.visibility = hidden;
        }
    }
}


function createNewTask(){
    var li = document.createElement('li');
    liste.appendChild(li);

    var checkbox       = document.createElement('input');
    checkbox.type      = 'checkbox';
    checkbox.className = 'box';
    checkbox.name      = 'name';
    checkbox.id        = 'id';
    checkbox.onclick   = textBarre;
    li.appendChild(checkbox);
    
    var label          = document.createElement('label');
    var text           = document.createTextNode(document.getElementById('myInput').value);
    label.appendChild(text);
    li.appendChild(label);
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
    var li    = document.getElementsByTagName('li');
    var count = li.length;
    for(i = 0; i < count; i++){
        li[0].remove();
        console.log(li.length)
    }

}







