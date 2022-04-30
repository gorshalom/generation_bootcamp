const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const formulario = document.querySelector("form");
const inputs = document.querySelectorAll("input");

const errorNombre  = document.querySelector("#errorNombre");
const errorApellido  = document.querySelector("#errorApellido");
const errorPassword  = document.querySelector("#errorPassword");
const errorEmail  = document.querySelector("#errorEmail");
const errorTelefono  = document.querySelector("#errorTelefono");

const statusInf={
	nombre:false,
	apellido: false,
	email:false,
	password:false,
	telefono:false
}


inputs.forEach((input)=>{
	console.log(input);
	input.addEventListener("keyup", (e)=>{
		switch (e.target.name) {
			case "nombre":
				//console.log(e.target.value);
				if(expresiones.nombre.test(e.target.value)){
					statusInf.nombre=true;
					errorNombre.textContent="";
					//console.log("Nombre correcto");
				}else{
					statusInf.nombre=false;
					errorNombre.textContent="Nombre incorrecto";
					//console.log("Nombre incorrecto");
				}

				break;
			case "apellido":
				if(expresiones.nombre.test(e.target.value)){
					statusInf.apellido=true;
					errorApellido.textContent="";
					//console.log("Apellido correcto");
				}else{
					statusInf.apellido=false;
					errorApellido.textContent="Apellido incorrecto";
					//console.log("Apellido incorrecto");
				}

				break;
			case "email":
				if(expresiones.email.test(e.target.value)){
					statusInf.email=true;
					errorEmail.textContent="";
					//console.log("Email correcto");
				}else{
					statusInf.email=false;
					errorEmail.textContent="Email incorrecto";
					//console.log("Email incorrecto");
				}
				break;
			case "password":
				if(expresiones.password.test(e.target.value)){
					statusInf.password=true;
					errorPassword.textContent="";
					//console.log("Password correcto");
				}else{
					statusInf.password=false;
					errorPassword.textContent="Contraseña incorrecta";
					//console.log("Password incorrecto");
				}
				break;		
			case "telefono":
				if(expresiones.telefono.test(e.target.value)){
					statusInf.telefono=true;
					errorTelefono.textContent="";
					//console.log("Telefono correcto");
				}else{
					statusInf.telefono=false;
					errorTelefono.textContent="Telefono incorrecto";
					//console.log("Telefono incorrecto");
				}
				break;
			default:
				break;
		}


	})	
});


formulario.addEventListener("submit", (e)=>{
	e.preventDefault();
	
	const check= document.querySelector("#terminos").checked;
	
	if (!Object.values(statusInf).includes(false) && check==true) {
		console.log("Enviado");	
		document.querySelector(".alert-danger").style.display="none";
		
		const datos = Object.fromEntries(
			new FormData(e.target)
		)
		console.log(datos);
		formulario.reset();

	}else{
		console.log("No enviado");
		document.querySelector(".alert-danger").style.display="block";
	}
	


})



