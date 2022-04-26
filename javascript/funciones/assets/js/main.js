/* Funciones nos permiten reutilizar codigo */

function saludar(nombre="Panchito", apellido=""){
    
    console.log(`hola mi nombre es: `,nombre,apellido);
    console.log(`hola mi nombre es: ${nombre}`);

    console.log(`hola mi nombre es: ${nombre ? 'Juancho' : 'Desconocido'}`);

}

saludar("Pedro");


let funcionSaludar = saludar("Ramon","Garcia");
console.log(typeof(funcionSaludar));
console.log(funcionSaludar);

document.write(`<h1>Este es un h1</h1>`); 
console.log(`<h1>Este es un h1</h1>`);



//funcion declarada

function suma(a,b){
    return a+b;
}

console.log(suma(10,20));

// funciones expresadas o funcion expresion
const resta = function(a,b){
    return a - b;
}
console.log(resta(30,10));

// let valor=0;
// valor=resta(10,20)
setTimeout(()=>{

},3000);

// funcion flecha

const multiplicacion =(a,b)=>{
//     return a*b;
}

console.log(multiplicacion(suma(10,20),resta(10,20)));

