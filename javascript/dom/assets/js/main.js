/* Este es un nodo comentario */

const $titulo=document.querySelector("h1");
const $parrafo=document.querySelector("p");
const $card=document.querySelector(".card");

//nodeName
console.log($titulo.nodeName);
console.log($parrafo.nodeName);

//textContent
$parrafo.textContent += "hola mundo";
$titulo.textContent = "Modificamos elementos con js";

//innnerHTML - mejor no usar - remplaza lo que hay dentro del elemento
$parrafo.innerHTML = "<a href='#'>Este es un link</a>";

//outerHTML - reemplaza todo el elemento

$parrafo.outerHTML = "<a href=\"#\" >Este es otro link</a>";

//crear elementos html


function crearElemento(){
    const img= document.createElement('img');
    img.src="https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/Que_debes_saber_antes_de_adoptar_un_gatito.jpg?itok=guFplHEU";
    $card.appendChild(img);
}

crearElemento();