var tasks = [
    {
        id: 1,
        titre: 'Send email',
        isDone: false
    },
    {
        id: 2,
        titre: 'Go to java',
        isDone: true
    },
    {
        id: 3,
        titre: 'Make a cake',
        isDone: true
    },
    {
        id: 4,
        titre: 'Make a TodoList',
        isDone: true
    }
];



var app = {
    init: function(){
        
        
        this.addCheckbox();
        this.doneOrNot();
        
    },
    
    addCheckbox: function(){
        var self = this;
        
        for(i = 0; i < tasks.length; i++){
            addInput();
            addLabel();
        }
        
    },

    doneOrNot: function(){

        for(i= 0; i < tasks.length; i++){
            var inputs = document.getElementsByTagName('input');

            if(tasks[i].isDone == false){
                inputs[i].checked = false;
            } else{
                inputs[i].checked = true;
            }

        }
    }
}


var liste = document.getElementById("liste");

function addInput(){
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = 'name' + tasks[i];
    checkbox.id = 'id' + tasks[i];
    liste.appendChild(checkbox);

}


function addLabel(){
    var label = document.createElement('label');
    var text = document.createTextNode(tasks[i].titre);
    label.appendChild(text);
    liste.appendChild(label);
    addBr();

}

function addBr(){
    var espace = document.createElement('br');
    liste.appendChild(espace);
}


