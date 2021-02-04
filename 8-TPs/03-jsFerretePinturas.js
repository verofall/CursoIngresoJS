/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let temp1;
    let division;
    let resta;
    let temp2;
    

    temp1 = txtIdTemperatura.value;
    temp1 = parseInt(temp1);

    division = 5 / 9;
    resta = (temp1 - 32);

    temp2 = division * resta;
    temp2 = parseFloat(temp2);
    temp2 = temp2.toFixed(1);

    alert(+ temp1 + "° Fahrengheit son " + temp2 + "° Centígrados");
    
}

function CentigradosFahrenheit ()
{
    
    let temp2;
    let division;
    let temp1;
    
    temp2 = txtIdTemperatura.value;
    temp2 = parseInt(temp2);

    division = 9 / 5;

    temp1 = (temp2 * division) + 32;
    temp1 = parseFloat(temp1);

    temp1 = temp1.toFixed(1)

    alert( + temp2 + "° Centígrados son " + temp1 + " ° Fahrengheit.");	
}
