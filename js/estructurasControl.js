/* IF */
/*
== : igual
!= : diferente a
>  : mayor que
<  : menor que
>= : mayor o igual
<= : menor o igual

*/
const puntaje = 1000;
/* if/else */
if (puntaje==1001){
    console.log("El puntaje es 1000");
}
else
    console.log("El puntaje es distinto de 1000");

const rol = "EDITOR";
/* if/else if/else */
if (rol === "ADMINISTRADOR") {
    console.log("Acceso a todo el sistema");
}
else if (rol === "EDITOR") {
    console.log("Solo puedes publicar");
} 
else {
    console.log("No puedes acceder al sistema");
}

/* switch */

const metodoPago = "deposito";
switch (metodoPago){
    case "tarjeta":
        console.log("Seleccionaste tarjeta");
        break;
    case "transferencia":
        console.log("Seleccionaste transferir");
        break;
    case "deposito":
        console.log("Seleccionaste deposito");
        break;
    default:
        console.log("Necesitas seleccionar un metodo de pago");      
}

/* ITERADORES */
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
/* for */

for(let i=0; i<10;i++) {
    console.log(i);
}

for (let i=0; i<carrito.length; i++){
    console.log(carrito[i].nombre);
}

/* while */
let i =0;

while(i<100){
    if (i%2==0)
        console.log(`El numero ${i} es par`)
    else
        console.log(`El numero ${i} es impar`)
    i++;
}

/* do-while */

i = 100;

do {
    console.log(i);
    i++;
} while(i<10);

/* forEach */
carrito.forEach(producto => console.log(producto.nombre));

/* Map */

carrito.map(producto => console.log(producto.nombre))