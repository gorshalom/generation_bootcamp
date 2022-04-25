window.addEventListener('load', function(){
    this.alert("se ha terminado de cargar la pagina");
});




function saludar(){
    alert("hola");
}

/*manejador de  eventos semantico */

const $botonSemantico = document.getElementById("evento-semantico");
$botonSemantico.onclick=saludar;

$botonSemantico.onclick = function(evento){
    console.log(evento.target);
}

/* Manejador de evento multiple */


const $botonMultiple =document.getElementById("evento-multiple");

$botonMultiple.addEventListener('click', saludarMultiple);

$botonMultiple.addEventListener('click', function(e){
    console.log(e.target);
});

function saludarMultiple(){
    alert("ola k ase");
}