"use strict" // Ejecuta js en modo estricto

/* Objetos */
// Construccion de un objeto
const producto = {
    nombreProducto: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}

// // Opción 1 para acceder a valores del objeto
// console.log(producto.precio);
// // Opción 2 para acceder a valores del objeto
// console.log(producto["nombreProducto"]);


// Agregar propiedades
producto.imagen = "imagen.jpeg";

// Eliminar propiedades
delete producto.disponible;
console.log(producto);
// El objeto ya no puede ser modificado: No permite agregar,modificar ni eliminar nuevas propiedades
Object.freeze(producto);
console.log(Object.isFrozen(producto));



// El objeto ya no puede ser modificado: No permite agregar ni eliminar nuevas propiedades pero si modificar las propiedades
Object.seal(producto);
console.log(Object.isSealed(producto));


// Destructuring

const {precio, nombreProducto} = producto;

console.log(precio);
console.log(nombreProducto);

// Unir objetos
const producto2 = {
    nombreProducto: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}
const medidas = {
    peso: "1kg",
    longitud: "1m"
}

const nuevoProducto = {...producto2, ...medidas}

console.log(nuevoProducto);
