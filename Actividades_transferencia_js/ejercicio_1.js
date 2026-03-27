/*1. Lista de asistencia: Cree un arreglo con los nombres de cinco aprendices. Agregue
un nuevo nombre al final y elimine el primero. Finalmente, muestre la cantidad total
de nombres registrados.*/

let aprendices = ["Juan", "María", "Carlos", "Ana", "Luis"];

// Agregar un nuevo nombre al final
aprendices.push("Sofía");

// Eliminar el primer nombre
aprendices.shift();

// Mostrar la cantidad total de nombres registrados
console.log("Cantidad total de aprendices:", aprendices.length);