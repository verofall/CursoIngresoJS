/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let precio1;
    let precio2;
    let precio3;
    let suma;

    precio1 = txtIdPrecioUno.value;
    precio2 = txtIdPrecioDos.value;
    precio3 = txtIdPrecioTres.value;

    precio1 = parseFloat(precio1);
    precio2 = parseFloat(precio2);
    precio3 = parseFloat(precio3);

    suma = precio1 + precio2 + precio3;

    alert("La suma del precio de los tres productos es " + suma);
	
}
function Promedio () 
{
	let precio1;
    let precio2;
    let precio3;
    let suma;
    let promedio;

    precio1 = txtIdPrecioUno.value;
    precio2 = txtIdPrecioDos.value;
    precio3 = txtIdPrecioTres.value;

    precio1 = parseFloat(precio1);
    precio2 = parseFloat(precio2);
    precio3 = parseFloat(precio3);

    suma = precio1 + precio2 + precio3;
    promedio = (suma/3);
    promedio = promedio.toFixed(2)

    alert("El promedio de precio de los tres productos es " + promedio);
}
function PrecioFinal () 
{
	let precio1;
    let precio2;
    let precio3;
    let suma;
    let iva;
    let precioFinal;

    precio1 = txtIdPrecioUno.value;
    precio2 = txtIdPrecioDos.value;
    precio3 = txtIdPrecioTres.value;

    precio1 = parseFloat(precio1);
    precio2 = parseFloat(precio2);
    precio3 = parseFloat(precio3);

    suma = precio1 + precio2 + precio3;
    iva = suma * 21/100;
    precioFinal = suma + iva; 

    alert("El precio final más IVA es " + precioFinal);
}
/*
function PrecioFinal () 
{
	let precio1;
    let precio2;
    let precio3;
    let suma;
    let iva;
    let precioFinal;

    precio1 = txtIdPrecioUno.value;
    precio2 = txtIdPrecioDos.value;
    precio3 = txtIdPrecioTres.value;

    precio1 = parseFloat(precio1);
    precio2 = parseFloat(precio2);
    precio3 = parseFloat(precio3);

    suma = precio1 + precio2 + precio3;
    iva = suma * 0.21;
    precioFinal = suma + iva; 

    alert("El precio final más IVA es " + precioFinal);
} */

/*
function PrecioFinal () 
{
	let precio1;
    let precio2;
    let precio3;
    let suma;
    let precioFinal;

    precio1 = txtIdPrecioUno.value;
    precio2 = txtIdPrecioDos.value;
    precio3 = txtIdPrecioTres.value;

    precio1 = parseFloat(precio1);
    precio2 = parseFloat(precio2);
    precio3 = parseFloat(precio3);

    suma = precio1 + precio2 + precio3;
    precioFinal = suma + (suma * 0.21); 

    alert("El precio final más IVA es " + precioFinal);
} */

/* function PrecioFinal () 
{
	let precio1;
    let precio2;
    let precio3;
    let suma;
    let precioFinal;

    precio1 = txtIdPrecioUno.value;
    precio2 = txtIdPrecioDos.value;
    precio3 = txtIdPrecioTres.value;

    precio1 = parseFloat(precio1);
    precio2 = parseFloat(precio2);
    precio3 = parseFloat(precio3);

    suma = precio1 + precio2 + precio3;
    precioFinal = suma * 1.21; 

    alert("El precio final más IVA es " + precioFinal);
} */