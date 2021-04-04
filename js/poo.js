/* Object Literal */
const producto = {
    nombre: "Tablet",
    precio: 500
}

/* Objecto costructor */
function Cliente (nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}

function Producto(nombre,precio){
    this.nombre = nombre;
    this.precio = precio;
}
function formatearProducto(producto) {
    return `El producto ${producto.nombre} tiene un precio de $${producto.precio}`;
}
// Prototype nos permite crear funciones que solo se utilizan en un objeto especifico
Cliente.prototype.formatear = function() {
    return `El cliente es ${this.nombre} ${this.apellido}`;
}
Producto.prototype.formatearProducto = function() {
    return `El producto ${this.nombre} tiene un precio de $${this.precio}`;
}


let cliente1 = new Cliente("Arturo","Sanchez");
let producto1 = new Producto("Televisión", 5000);
let producto2 = new Producto("iPad",8000);


console.log(cliente1.formatear());
console.log(formatearProducto(producto1));
console.log(producto2.formatearProducto())

/* Clases */
class ProductoClase {
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
    formatear() {
        return `El producto ${this.nombre} tiene un precio de $${this.precio}`;
    }
    precioProducto(){
        return this.precio;
    }
}

const producto3 = new ProductoClase("Matebook D15",16000);
console.log(producto3.formatear());

console.log(producto3.precioProducto());
/* Herencia */
class Libro extends ProductoClase{
    constructor(nombre,precio,isbn) {
        super(nombre,precio);
        this.isbn=isbn;
    }
    /* Sobreescribimos metodo */
    formatear() {
        return `${super.formatear()} y su ISBN es ${this.isbn}`;
    }
}

const libro = new Libro("MOMO",400,"123456789");
console.log(libro.formatear());