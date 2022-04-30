 const nombre = "Juancho";
 // const nombre2 = new String("Juancho");

 // console.log(nombre);
 // console.log(nombre2);

 const persona = new Object();

 persona.nombre = "Juancho";
 persona.apellido = "Pancho"
 persona.edad = 23

 console.log(persona);

 const nuevaPersona = {
     // nombre: "Jose",
     // apellido: "Becerra",
     nombreCompleto:{
         nombre: "Jose",
         apellidos: "Becerra"
     },
     edad: 28,
     pasaTiempo: ["comer","jugar","anime"],
     tieneTrabajo: false,
     saludar: function(){
         console.log("ola k ase");
     },
     sumar: function(n1,n2){
         console.log(`El resultado de la suma es ${n1+n2}`);
     }

 }

 console.log(nuevaPersona);

 console.log(nuevaPersona.edad);
 console.log(nuevaPersona.nombreCompleto.nombre);
 console.log(nuevaPersona.pasaTiempo[2]);

 nuevaPersona.saludar();
 nuevaPersona.sumar(5,10);

 nuevaPersona.edad = 10;
 console.log(nuevaPersona.edad);

 nuevaPersona.colorFavorito = "Azul";
 console.log(nuevaPersona);

 console.log(nuevaPersona.hasOwnProperty("edad"));
 console.log(nuevaPersona.hasOwnProperty("edades"));

 console.log(Object.keys(nuevaPersona));
 console.log(Object.values(nuevaPersona));

const Juseppe = {
    nombreCompleto:{
        nombre: "Eduardo",
        apellidos: "Larios Juseppe"
    },
    edad: 28,
    pasaTiempo: ["leer","escuchar musica","jugar videojuegos"],
}

const Jonathan = {
    nombreCompleto: {
        nombre: "Yair",
        apellido: "Uriostegui"
    },
    edad: 23,
    pasatiempos: ["nadar","dibujar","anime"]
}

const Juan = {
    nombreCompleto: {
    nombre: "Juan",
    apellido: "Vazquez"
    },
    edad: 30,
    pasatiempos: ["coches", "animales","música"],
}

const Mitzi = {
    nomCompleto: {
        nom: "Mitzi",
        app: "Hernandez"
    },
    edad: 23,
    pasatiempo: ["jugar", "dibujar", "ver series"],
}

const Katia = {
    nombreCompleto: {
      nombre: "Katia",
      apellido: "Alvarez",
    },
    edad: 28,
    pasatiemp: ["Cine", "Musica", "Baile"],
  }

  const Abi = {
    nombreCompleto:{
        nombre: "Abigail",
        apellido: "Moreno"
    }, 
    edad:23, 
    pasatiempos: ["bailar", "plantas", "fotografía"], 
}

const Pedro = {
    nombreCompleto: {
        nombre: "Antonio",
        apellido: "Castañón"
    },
    edad: 18,
    pasatiempos: ["jugar","salir","series"],
}

const Lizbeth = {
    nombreCompleto: {
        nombre: "Liz",
        apellido: "Rubio"
    },
    edad: 23,
    pasatiempos: ["comer","hacer ejercicio","ver pelis"]
}

const aketzali={
    /* atributos o propiedades: datos*/
    nombrecompleto:{ 
    nombre: "aketzali",apellido: "gonzalez" 
    },
    edad: 23,
    pasatiempos:["pintar","leer","escribir"],
}

const manuManito = {
    nombre: "Manuel Adán",
    apellido: "Carrillo Zavala",
    edad: 29,
    pasaTiempos: ['Leer', 'Tomar cafésito', 'Estar en casa', 'Echar chismecito'],
}

const Arantxa = { 
    nombreCompleto: {
    nombre: "Arantxa", 
    apellido: "Perez"
    },
    edad: 26,
    pasatiempos: ["caminar", "patinar", "musica"]
}

const cohorte12 = [Arantxa,manuManito,aketzali,Lizbeth,Pedro,Abi,Katia,Mitzi,Juan,Jonathan,Juseppe];

console.log(cohorte12[9]);

for(let i=0; i<cohorte12.length; i++){
    console.log(cohorte12[i].edad);
}

