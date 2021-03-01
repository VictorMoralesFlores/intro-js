const NUMERO_1 = 100;
const NUMERO_2 = 200;

console.log(NUMERO_1);
console.log(NUMERO_2);


console.log("Suma:" + (NUMERO_1 + NUMERO_2));
console.log("Resta:" + (NUMERO_1 - NUMERO_2));
console.log("Multiplicación:" + (NUMERO_1 * NUMERO_2));
console.log("División:" + (NUMERO_1 / NUMERO_2));
console.log("Módulo:" + (NUMERO_1 % NUMERO_2));

/* OBJETO MATH: Algunos ejemplos */
console.log(window.Math.random());

let resultado;

resultado= Math.PI;
resultado = Math.round(2.5);
resultado = Math.ceil(2.5);
resultado = Math.floor(2.5);
resultado = Math.sqrt(144);
resultado = Math.abs(-200);
resultado = Math.min(25,7);
resultado = Math.max(25,7);


resultado = 20 + 30*2;
console.log(resultado);

/* INCREMENTOS Y DECREMENTOS */

let i = 0;
console.log(++i);
console.log(i--);
console.log(i);
i += 200;
console.log(i);
