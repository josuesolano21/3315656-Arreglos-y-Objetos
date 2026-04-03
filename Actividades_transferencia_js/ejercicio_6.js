/*6. Describiendo un objeto personal: Cree un objeto que represente algo que lleve
consigo todos los días (ej. audífonos, libreta, termo). Debe tener al menos cuatro
propiedades. Recorra sus claves y valores usando un ciclo for...of sobre
Object.entries().*/
let audifonos = {
  marca: "samsumg",
  bateria: "1.35v",
  sonido: "estereo",
  color: "azul"
};
for (const [clave, valor] of Object.entries(audifonos)) {
  console.log(clave, valor);
}


