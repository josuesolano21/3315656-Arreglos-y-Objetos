/*2. Inventario de frutas: Dado el arreglo ["Manzana", "Pera", "Uva"], agregue “Banano”
al inicio, retire el último elemento y muestre el arreglo final. Luego recórralo
utilizando for...of.*/

let frutas = ["Manzana", "Pera", "Uva"];

// Agregar "Banano" al inicio
frutas.unshift("Banano");

// Retirar el último elemento
frutas.pop();

// Mostrar el arreglo final
console.log("Arreglo de frutas:", frutas);

// Recorrer el arreglo con for...of
for (let fruta of frutas) {
    console.log("Fruta:", fruta);
}