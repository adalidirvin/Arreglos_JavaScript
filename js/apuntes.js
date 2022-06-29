var a=30;
let b=30;
const c=30;
console.log("Variable a: ",a,"\nVariable B",b,"\nCosntante C ",c);
//c=45;
//console.log("Constante c>> ",c);
b="Hola";
console.log("Variable b>> ",b);
var a="Hola";
console.log("Variable a>> ",a);
let mascotas2=[["Perro","Boby"],["Gato","Micifuz"],["Loro","Pinky"]];

let numeros=[6,5,1,2,9,63,58,41,1,3,5];
console.log(numeros);
numeros.sort();
console.log(numeros);

//*Cuando usamos VAR para definir una variable, esta variable puede ser reasignada tantas veces como se desee.
//!Esto provoca que exista el riesgo de declarar multiples veces una misma variable.

//*Cuando usamos LET para declarar la variable, esta variable ya no puede volver a declararse (usarse).
