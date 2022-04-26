//obtener el valor de un input
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





