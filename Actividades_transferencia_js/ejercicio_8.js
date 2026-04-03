/*8. Registro de un libro: Cree un objeto llamado libro con las propiedades: título, autor,
número de páginas y género. Luego imprima un mensaje descriptivo usando estas
propiedades, por ejemplo:
"El libro '___' del autor ___ pertenece al género ___."*/

// Crear el objeto libro
let libro = {
    titulo: "El principito",
    autor: "Antoine de Saint-Exupéry",
    paginas: 96,
    genero: "Fábula"
};

// Imprimir mensaje descriptivo
console.log(`El libro "${libro.titulo}" del autor ${libro.autor} pertenece al género ${libro.genero}.`);