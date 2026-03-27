/*3. Notas de actividades: Cree un arreglo con seis notas numéricas. Recorra el arreglo
usando for y calcule el promedio (no use funciones externas).*/

let notas = [4.0, 3.5, 4.2, 2.8, 3.9, 4.5];

let suma = 0;

for (let i = 0; i < notas.length; i++) {
  suma = suma + notas[i];
}

let promedio = suma / notas.length;

console.log("Promedio:", promedio);