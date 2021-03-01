const PRODUCTO = "Monitor de 20\"";
const PRODUCTO_2 = String('Monitor de 20"');
const PRODUCTO_3 = new String("Monitor de 20\"");

console.log(typeof PRODUCTO);
console.log(typeof PRODUCTO_2);
console.log(typeof PRODUCTO_3);
console.log(PRODUCTO);


/* METODOS PARA STRINGS */
let tweet = "Aprendiendo JavaScript con el curso de Desarrollo Web completo";

console.log("Tamaño de tweet:" + tweet.length);
// IndexOf(): Nos indica en qué posicion se encuentra la subcadena deseada (retorna posición)
console.log("JavaScript se encuentra en la posición :" + tweet.indexOf("JavaScript"));
console.log("NO se encuentra en la posición :" + tweet.indexOf("NO"));
// Includes(): Nos indica en qué posicion se encuentra la subcadena deseada (retorna booleano)
console.log("¿JavaScript se encuentra en tweet?: " + tweet.includes("JavaScript"));
console.log("¿'NO' se encuentra en tweet?: " + tweet.includes("NO"));

/* CONCATENACIÓN */
const NOMBRE = "Victor";
const APELLIDO = "Morales";
// La suma en cadenas concatena
console.log(NOMBRE +" "+ APELLIDO)

/* TEMPLATE STRINGS: Se deben usar las comillas invertidas */
console.log(`Nombre Cliente: ${NOMBRE} ${APELLIDO}`);
