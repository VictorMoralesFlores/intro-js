// Arreglos o arrays

const numeros = [10, 20, 30, 40, 50];


const meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo");


// Longitud o extensión de arreglo
console.log(meses.length);

meses.forEach(function(mes) {console.log(mes)});


// Modificar arreglos

numeros[4] = 500;

// Agregar elemento
// Agrega al final
numeros.push(1000, 2000, 3000);
// Agrega al inicio
numeros.unshift(-10, -20, -30);

//Eliminar elementos

// Elimina el ultimo elemento
 meses.pop();
 // Elimina el primer elemento.
 meses.shift();

 // Elimina un elemento en especifico splice(__indice_primer_elemento__, __numero_de_elementos__)

 meses.splice(0,1);

 // Acceso a valores de arreglo

console.log(numeros[4]);

// Rest operator o Spread operator.

const nuevoArreglo = [...meses, "Junio"];


console.table(numeros);

console.table(meses);

console.log(nuevoArreglo);

/* Array Methods */

const meses2 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

const carrito = [
    {nombre:"Producto1", precio:500},
    {nombre:"Producto2", precio:650},
    {nombre:"Producto3", precio:730},
    {nombre:"Producto4", precio:120},
    {nombre:"Producto5", precio:400},
    {nombre:"Producto6", precio:900},
    {nombre:"Producto7", precio:199},
    {nombre:"Producto8", precio:420},
    {nombre:"Producto9", precio:50}
];

//Includes
let resultado = meses2.includes("Marzo");

// Some para arreglo de objetos

resultado = carrito.some(function(producto) {
    return producto.nombre === "Producto8";
},0);

// Reduce

resultado = carrito.reduce(function(total, producto) {
    return total+producto.precio;
},0);

// Filter


resultado = carrito.filter(function (producto) {
    return producto.precio > 400;
});
console.log(resultado);