/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let num1;
	let num2;
	let resultado;

	// Entradas, obtengo el valor desde la página web
	num1 = txtIdNumeroUno.value;
	num2 = txtIdNumeroDos.value;

	// Conversiones (Parseo)
	num1 = parseInt(num1);
	num2 = parseInt(num2);

	resultado = num1 + num2;

	alert("La suma es " + resultado);
	
}

function restar()
{
	let num1;
	let num2;
	let resultado;

	num1 = txtIdNumeroUno.value;
	num2 = txtIdNumeroDos.value;

	num1 = parseInt(num1);
	num2 = parseInt(num2);

	resultado = num1 - num2;

	alert("La resta es " + resultado);
	
}

function multiplicar()
{ 
	let num1;
	let num2;
	let resultado;

	num1 = txtIdNumeroUno.value;
	num2 = txtIdNumeroDos.value;

	num1 = parseInt(num1);
	num2 = parseInt(num2);

	resultado = num1 * num2;

	alert("El producto es " + resultado);
	
}

function dividir()
{
	let num1;
	let num2;
	let resultado;

	num1 = txtIdNumeroUno.value;
	num2 = txtIdNumeroDos.value;

	num1 = parseInt(num1);
	num2 = parseInt(num2);
	resultado = num1 / num2;

	alert("La división es " + resultado);
	
}

