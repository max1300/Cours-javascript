var app = {
    init: function(){
        // on recupere et logue le titre dans le head
        console.log('Document-title: ', document.title);
        document.title = 'nouveau titre';
        console.log('Document-title: ', document.title);
        
        // on recupere et logue le h1
        console.log('h1: ', document.getElementsByTagName('h1'));
        var titreHone =  document.getElementsByTagName('h1');
        var num = titreHone.length;
        alert('il y a ' + num + ' titres h1');
        

        // on recupere et logue les classes
        console.log('class: ', document.getElementsByClassName('text-red'));
        HTMLElement.className = 'text-blue'; // à voir pourquoi ca ne fonctionne pas
        console.log('class: ', document.getElementsByClassName('text-blue'));

        console.log('id: ', document.getElementById("title"));


    }
};

app.init();