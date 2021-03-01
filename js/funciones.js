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