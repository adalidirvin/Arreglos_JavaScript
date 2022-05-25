/*
    *La función saludar, recibe los datos de la persona por teclado y muestra el resultado en un elemento P. 
*/
function saludar(){
    const persona=[];
    persona[0]=prompt("Cual es tu nombre?");
    persona[1]=prompt("Cual es tu apellido?");//?Para obtener un elemento de un arreglo, se puede hacer colocando su nombre seguido de [pocision].
    persona[2]=prompt("Cual es tu edad?");
    persona[3]="Fin";
    document.getElementById("datos").innerHTML=persona;//?Para obtener todos los datos del arreglo, simplemente se coloca el nombre del arreglo.
}
function serie(){
    const serie=[];
    let i=1;
    let n=prompt("Ingrese el número de terminos pares");
    while(i<=n){
        serie[i-1]=i*2;
        i++;
    }
    let texto = "<ul>";//*Se crea una variable TEXTO, que contiene la sintaxis de una etiqueta <UL>, con lo cual se inicia la lista.
    for (let j = 0; j < serie.length; j++) {
      texto =texto+ "<li>" + serie[j] + "</li>";//*En cada iteración, se agrega el elemento <LI> a cada fila, para generar los elementos de la lista
    }
    texto += "</ul>";//*Para finalizar, se agrega la etiqueta de cierre de la lista </UL>
    document.getElementById("serie").innerHTML=texto;   
}

function impares(){
    const impar=[];
    let n=prompt("Cuantos terminos generaremos?");
    for(let i=0;i<n;i++){
        impar[i]=(2*i)+1;
        console.log(impar[i]);
    }

    let tam=impar.length
    texto="<ol>";
    for(let j=0;j<tam;j++){
        texto=texto+"<li>"+impar[j]+"</li>";
    }
    texto=texto+"</ol>";
    document.getElementById("resultado").innerHTML=texto;
}
