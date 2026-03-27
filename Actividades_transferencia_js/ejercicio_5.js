/*5. Lista de tareas: Cree un arreglo vacío llamado tareas. Agregue tres actividades
utilizando push(). Luego elimine la última utilizando pop(). Muestre el resultado.*/

let tareas = [];

// Agregar tres actividades
tareas.push("Hacer la compra");
tareas.push("Lavar la ropa");
tareas.push("Estudiar para el examen");

// Eliminar la última actividad
tareas.pop();

// Mostrar el resultado
console.log("Tareas restantes:", tareas);