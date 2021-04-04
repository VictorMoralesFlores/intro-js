/* Declaracion de funciones

Hoisting: Comportamiento por el cual las declaraciones se mueven al principio de su ámbito.
En el caso de las funciones, puede ser declarada después de ser invocada; sin embargo, para variables el hoisting solo aplica a la declaración y no a la asignación

*/


function sumar(numero1=0, numero2=0){ //parametros
    console.log(numero1 + numero2);
}


// Llamado a función
sumar(5, 10);// Argumentos
sumar(6, 21);// Argumentos
sumar(1);// Argumentos

// Expresion de la funcion

const sumar2 = function () {
    console.log(3 + 3);
}

sumar2();

// IIFE

(function() {
    console.log("Esto es una función");
})();

/* Funciones con retorno */

function sumarRetorno (n1 = 0, n2 = 0) {
    return n1 + n2;
}

const resultado = sumarRetorno(7,4);

console.log(`El valor es ${resultado}`);


/* METODOS DE PROPIEDAD */

const reproductor = {
    reproducir: function (id = 0) {
        console.log(`Reproduciendo canción con ID ${id}`);
    },
    pausa: function (){
        console.log("Pausando");
    },
    crearPlaylist: function(nombre) {
        console.log(`Creando Playlist ${nombre}`);
    },
    reproducirPlaylist: function(nombre) {
        console.log(`Reproduciendo Playlist ${nombre}`);
    },
}

reproductor.borrarCancion = function(id) {
    console.log(`Eliminando la canción ${id}`);
}
reproductor.reproducir(2000);
reproductor.pausa();
reproductor.borrarCancion(1406);

reproductor.crearPlaylist("Banana");
reproductor.reproducirPlaylist("Banana");

/* Arrow functions */

const sumarArrow = (n1, n2) =>  n1 + n2;

console.log(sumarArrow(10,100));

const meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo");

meses.forEach( mes => {if (mes == "Marzo")
                {
                    console.log("Marzo si está");
                }});

/* CARRITO */

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

let resultadoAF;

resultadoAF = carrito.some(producto => producto.nombre === "Producto1");

resultadoAF = carrito.reduce((total, producto)=>total + producto.precio,0);

resultadoAF = carrito.filter(producto => producto.precio>400);

console.log(resultadoAF);

//console.log(`El resultado es ${resultadoAF}`);