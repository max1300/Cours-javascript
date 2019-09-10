var app = {
    init: function(){
        var p = document.getElementsByTagName('p');


        p[0].addEventListener('mouseover', function(event) {
            var x = event.clientX;
            var y = event.clientY;
            console.log(x + ' ' + y);
            // MouseEvent.target.style.color= 'blue';
            
            setTimeout(function() {
                event.target.style.color = "";
            }, 500);
            
            moyenne = window.innerWidth /2;
            
            if(event.clientX > moyenne){
                console.log('A DROITE');
                event.target.classList.add('text-red');
                
            } else {
                console.log('A GAUCHE');
                event.target.classList.remove('text-red');
            }
        }, false);


        
        p[0].addEventListener('mouseout', function(MouseEvent) {
            var x = MouseEvent.clientX;
            var y = MouseEvent.clientY;
            console.log(x + ' ' + y);
            MouseEvent.target.style.color= 'orange';
            
            setTimeout(function() {
                MouseEvent.target.style.color = "";
            }, 500);
        }, false);



        p[0].addEventListener('mouseover', function(event){

            console.log(event);

           

        });


    }
};

app.init();


function test (nom, cb) {

    setTimeout(function () {
        cb({
            nom: 'test'
        })

    }, 1000);

} 

test('mouseover', function (event) {
    console.log('callback run', event);
})