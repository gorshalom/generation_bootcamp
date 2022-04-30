

//Mi solucion

/* 
let input = document.getElementById("fecha");

input.addEventListener("change", function () {    
    let fecha = new Date();
    let fechaInt = new Date(input.value);    

    let diferencia = fecha.getFullYear() - fechaInt.getFullYear();

    if(fecha.getMonth()<fechaInt.getMonth()){        
        if(diferencia>0){
            diferencia -= 1;
        }               
    }
    if(fecha.getMonth()==fechaInt.getMonth()){
        if(fechaInt.getDate()>=fecha.getDate()){
            if(diferencia>0){
                diferencia -= 1;
            }
        }
    }
    
    let resp = document.getElementById("respuesta");
    resp.innerHTML = "Usted tiene "+diferencia+" años";

    console.log(diferencia);   
});
 */

//version 1 Jhon
/* 
const anioNacimiento= parseInt(prompt("Escribe tu año de nacimiento: "));
const anioActual=2022;

console.log(`Tienes `,anioActual-anioNacimiento,` años`);
 */

//version 2 jhon

//pcion1
/*
const anioActual=2022;

function calcularEdad(){
    const anioNacimiento =parseInt( document.getElementById('anio').value);
    console.log(`Tienes ${anioActual - anioNacimiento} años`);
} */

//opcion2
/* const boton = document.getElementById("calcular");

boton.addEventListener("click",()=>{
    const anioNacimiento =parseInt( document.getElementById('anio').value);
    console.log(`Tienes ${anioActual - anioNacimiento} años`);
}) */

//version 3 jhon

const fecha= new Date();


function mostrarDatos(){
    const nacimiento= document.getElementById("anio").value;
    const nacimientoDividido=nacimiento.split("-");
    const anio=parseInt(nacimientoDividido[0]);
    const mes=parseInt(nacimientoDividido[1]);
    const dia=parseInt(nacimientoDividido[2]);



}


