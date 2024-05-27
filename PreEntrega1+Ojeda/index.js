"use strict";

function saludar(nombre) {
    alert("Hola " + nombre + ", bienvenido/a a Anny Candybar!!!");
    Nombre = nombre;
}

let Nombre
saludar(prompt("Ingresa tu nombre"));

alert("A continuación podrás ver los precios de los elementos de Candybar");
let opcion = prompt("Ingrese la opción deseada: 'f' (para fondo), 'm' (para mesa), 'c' (para cilindro), o 'a' (para alfombra). Ingrese 's' para salir.");


while (opcion) {
    switch (opcion) {
        case "f":
            alert("el precio final es $15000");
            break;
        case "m":
            alert("el precio final es $10000");
            break;
        case "c":
            alert("el precio final es $5000");
            break;
        case "a":
            alert("el precio final es $3000");
            break;
        case "s":
            alert("Muchas gracias por elegirnos!!!");
            break;
        default:
            alert("'" + opcion + "' No es una opción valida.");
            break;
        }
    if (opcion == "s"){
        alert("Hasta la próxima, " + Nombre + "!!!");
        opcion = false
    } else {
        opcion = prompt("Ingrese la opción deseada: 'f' (para fondo), 'm' (para mesa), 'c' (para cilindro), o 'a' (para alfombra). Ingrese 's' para salir.")
    }
}





