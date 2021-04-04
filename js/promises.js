/*
En los promises existen 3 estados posibles:
-- Pendign:  No se ha cunplido pero tampoco se ha rechazado
--Fulfilled: Se ha cumplido
--Rejected:  Se ha rechazado o no se pudo cumplir
*/

const usuarioAutenticado = new Promise((resolve, reject)=>{
    const auth = false;

    if(auth){
        resolve("Usuario autenticado"); // El promise se cumple
    }
    else {
        reject("No se pudo autenticar el usuario");// El promise no se cumple
    }
});

console.log(usuarioAutenticado);

usuarioAutenticado
    .then(function(resultado){
        console.log(resultado);
    })
    .catch(function(error){
        console.log(error);
    })