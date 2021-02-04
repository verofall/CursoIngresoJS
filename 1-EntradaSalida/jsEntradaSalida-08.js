/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let numero1;
	let numero2;
	let resultado

	numero1 = txtIdNumeroDividendo.value;
	numero2 = txtIdNumeroDivisor.value;

	// PARA ESTE CASO SE PUEDE OBVIAR EL PARSEO PERO SIEMPRE QUE TRABAJAMOS CON NUMEROS ES RECOMENDABLE
	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2);

	resultado = numero1 % numero2


	alert("El resto es " + resultado);
}
