/*10.Clasificación por tipo de estructura: Observe las siguientes situaciones y decida si
debe usar arreglo u objeto. Justifique con una frase, luego codifique su respuesta
con un ejemplo.
a. Lista de colores favoritos.
b. Información completa de un estudiante.
c. Precios de diferentes camisetas.
d. Descripción de un computador portátil.*/

let colores = ["rojo", "azul", "verde", "negro"];
console.log(colores);
//a) Tipo: Arreglo Justificación: Porque es una colección de varios elementos del mismo tipo

let estudiante = {
    nombre: "andres",
    edad: 21,
    carrera: "Ingeniería",
    promedio: 4.5
};

console.log(estudiante);
//b) Tipo: Objeto Justificación: Porque contiene diferentes datos relacionados a una sola entidad.

let camisetas = [
    { nombre: "Camiseta blanca", precio: 30000 },
    { nombre: "Camiseta negra", precio: 35000 },
    { nombre: "Camiseta roja", precio: 32000 }
];

console.log(camisetas);
//c) Tipo: Arreglo (de objetos) Justificación: Porque son varios productos, cada uno con su propio precio

let computador = {
    marca: "HP",
    procesador: "Intel i5",
    ram: "8GB",
    almacenamiento: "512GB SSD"
};

console.log(computador);
//d) Tipo: Objeto Justificación: Porque describe las características de un solo elemento