
/* 
//Mi solucion
let cosa= "hola mundo";
reversa();

function reversa(){
    let res="";
    for(let i=cosa.length-1;i>=0;i--){
        res += cosa[i];        
    }    
    console.log(res);
}

 */



//solucion propuesta

const invertir =(palabra="") =>{
    if(palabra<=1){
        return console.warn("No ingresaste texto");        
    }

    if(typeof(palabra) !=='string'){
        return console.error("No ingresaste un texto");
    }

    let arreglo= palabra.split("");
    let reverso=arreglo.reverse();
    let unir= reverso.join("");
    return console.log(unir);
}
invertir(156456);









