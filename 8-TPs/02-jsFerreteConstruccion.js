/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo;
    let ancho;
    let perimetro;
    let cantidadDeAlambre;

    largo = txtIdLargo.value;
    ancho = txtIdAncho.value;

    largo = parseFloat(largo);
    ancho = parseFloat(ancho);
    
    perimetro = largo + ancho;

    perimetro = parseFloat(perimetro);

    cantidadDeAlambre = (perimetro * 3);

    alert("La cantidad de alambre a comprar es " + cantidadDeAlambre + " metros");
}
function Circulo () 
{
    let radio;
    let pi;
    let perimetro;
    let cantidadDeAlambre;

    radio = txtIdRadio.value;
    pi = 3.14159;

    radio = parseFloat(radio);
    pi = parseFloat(pi);

    perimetro = 2 * radio * pi;

    cantidadDeAlambre = perimetro * 3;

    cantidadDeAlambre = cantidadDeAlambre.toFixed(2);

    alert("La cantidad de alambre a comprar es " + cantidadDeAlambre + " metros");
	
}
function Materiales () 
{
    let largo;
    let ancho;
    let area;
    let cemento;
    let cal;

    largo = txtIdLargo.value;
    ancho = txtIdAncho.value;

    largo = parseFloat(largo);
    ancho = parseFloat(ancho);
    
    area = largo * ancho;

    cemento = area * 2;
    cemento = parseFloat(cemento);

    cal = area * 3;
    cal = parseFloat(cal)

    cal = cal.toFixed(0)
    cemento = cemento.toFixed(0)

    alert("Se necesitan " + cemento + " bolsas de cemento y " + cal + " bolsas de cal.");
    
}