/* crear un documento ejercicio 1.html y ejercicio1.js
-crear una plicación que registre y muestre la tecla presionada
 */

/* addEventListener('keydown', function(e){
    console.log(e.key);
}); */

const $parrafo = document.getElementById("parrafo");
addEventListener('keydown', function(e){
    $parrafo.innerHTML += e.key;
    console.log("keyCode: "+e.keyCode+" ||code: "+e.code+" ||key: "+e.key);
}
);
