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
        
        this.doneOrNot();
        this.addCheckbox();
        this.delIf();
        
       




    },
    
    addCheckbox: function(){
        addInput();
        addLabel();
        
       
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


    },

    delIf: function(){

        for(i= 0; i < tasks.length; i++){

            var labels = document.getElementsByTagName('label');
            var lab = labels[i];

            if(tasks[i].isDone == true){
                var del = document.createElement('del');
                del.value = tasks[i].titre;
                console.log(del.innerHTML);
                document.body.insertBefore(del, lab.nextSibling);
                console.log(labels[id]);
                
            }

        }
    }
}



function addLabel(){
    for(i= 0; i < tasks.length; i++){
        
        var labels = document.getElementsByTagName('label');
        var label = document.createTextNode(tasks[i].titre);
        document.getElementById(labels[i].id).appendChild(label);
    }
}


