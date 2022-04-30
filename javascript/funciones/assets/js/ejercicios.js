
/* 
1- Programa una función que valide si una palabra o frase dada, es un palíndromo 
(que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
*/

//validar si una palabra o frase dada, es un palíndromo

/* function validarPalindromo(palabra){
    let palabraInvertida = "";
    for(let i = palabra.length - 1; i >= 0; i--){
        palabraInvertida += palabra[i];
    }
    if(palabraInvertida === palabra){        
        document.getElementById("resultado").innerHTML = "La palabra " + palabra + " es un palindromo";
        return true;
    }else{
        document.getElementById("resultado").innerHTML = "La palabra " + palabra + " NO es un palindromo";
        return false;
    }
}


let boton = document.getElementById("boton");
boton.addEventListener("click", function(){
    let palabra = document.getElementById("palabra").value;
    validarPalindromo(palabra);
});

 */


/* 
2- Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
*/

//funcion que repoite un texto X veces
/* function repetirTexto(texto, veces){
    let textoRepetido = "";
    for(let i = 0; i < veces; i++){
        textoRepetido += texto;
    }
    document.getElementById("res1").innerHTML = textoRepetido;
    return textoRepetido;
}
//agregar la funcion recortarTexto un boton
let boton1 = document.getElementById("boton1");
boton1.addEventListener("click", function(){
    let texto = document.getElementById("texto").value;
    let veces = document.getElementById("numVeces").value;
    repetirTexto(texto, veces);
});
 */


/* 
3- Programa una función que te devuelva el texto recortado según el 
número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
 */
//funcion que recorta un texto segun el numero de caracteres indicados
/* 
function recortarTexto(texto, numeroCaracteres){
    let textoRecortado = "";
    for(let i = 0; i < numeroCaracteres; i++){
        textoRecortado += texto[i];
    }
    document.getElementById("resChar").innerHTML = textoRecortado;
    return textoRecortado;
}
 */

/* 
4- Programa una función que calcule el factorial de un número (El factorial de un entero positivo n,
     se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
 */

//funcion que calcula el factorial de un numero
let num= 5
factorial(num);
function factorial(numero){
    let factorial = 1;
    for(let i = 1; i <= numero; i++){
        factorial *= i;
    }
   // document.getElementById("resFact").innerHTML = factorial;
    console.log("el factorial de "+num+" es: "+factorial);
    return factorial;
}
