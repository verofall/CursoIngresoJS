/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
/* Se presentan las cuatro variantes */

function mostrarAumento()
{
	let compra;
	let descuento;
	let resultado;

	compra = txtIdImporte.value;
	compra = parseInt(compra);

	descuento = compra * 25/100;
	resultado = compra - descuento;
	txtIdResultado.value = resultado;

}

/*{
	let compra;
	let descuento;
	let resultado;

	compra = txtIdImporte.value;
	compra = parseInt(compra);

	descuento = compra * 0.25;
	resultado = compra - descuento;
	txtIdResultado.value = resultado;

}

{
	let compra;
	let resultado;

	compra = txtIdImporte.value;
	compra = parseInt(compra);

	resultado = compra - (compra * 0,25);
	txtIdResultado.value = resultado;

}

{
	let compra;
	let resultado;

	compra = txtIdImporte.value;
	compra = parseInt(compra);

	resultado = compra * 0.75;
	txtIdResultado.value = resultado;

} */
