function saludar(){
    const nombre=[];
    nombre[0]=prompt("Cual es tu nombre?");
    nombre[1]=prompt("Cual es tu apellido?");
    nombre[2]=prompt("Cual es tu edad?");
    document.getElementById("datos").innerHTML=nombre[0]+nombre[1]+nombre[2];
}