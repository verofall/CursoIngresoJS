/*
Debemos lograr tomar nombre, edad por ID y  ingresar tambien el apellido y mostrarlos concatenados 
ej.: "Usted se llama José Sanchez y tiene 66 años" 	*/
function mostrar()
{	
	let nombreDelAlumno
	let apellidoDelAlumno
	let edadDelalumno

	nombreDelAlumno=document.getElementById('txtIdNombre').value;
	apellidoDelAlumno=prompt ("su apellido es");
	edadDelalumno=document.getElementById('txtIdEdad').value;
	alert("Usted se llama "+ nombreDelAlumno  +" "+ apellidoDelAlumno + " y tiene " + edadDelalumno + " años");
}

