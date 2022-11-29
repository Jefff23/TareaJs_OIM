/*2.	En un cierto país el impuesto que se debe pagar por artículos importados se calcula mediante las siguientes reglas:
Precio
Impuesto

$ 0.00 - $ 20.00
No genera impuesto.

$ 20.01 - $ 40.00
30 %

$ 40.01 - $ 500.00
40 %

$ 500.01 en adelante
50 %
*/
function precio(num){
let total;
let porcentaje;

if (num<=20)
{
console.log("El preci total es "+num)

} 
else if(num>20)
{
    porcentaje=num*0.30
    total=num+porcentaje
console.log("EL precio total es de "+total)

}

else if(num>40)
{
    porcentaje=num*0.40
    total=num+porcentaje

console.log("El precio total de es de" +total)

}
else if(num>500)
{
    porcentaje=num*0.50
    total=num+porcentaje
console.log("El precio total de es de" +total)

}
}
precio(21);
