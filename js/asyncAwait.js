/* async/await */

function descargarNuevosClientes(){
    return new Promise(resolve =>{
        console.log("Descargando clientes... Espere...");
        
        // Retardamos por 5000 milisegundos (5 segundos)
        setTimeout(function(){
            resolve("Los clientes fueron descargados.")
        },5000)

    });
}

function descargarUltimosPedidos(){
    return new Promise(resolve =>{
        console.log("Descargando pedidos... Espere...");
        
        // Retardamos por 5000 milisegundos (5 segundos)
        setTimeout(function(){
            resolve("Los pedidos fueron descargados.")
        },3000)

    });
}

async function app() {

    try {
        // const clientes = await descargarNuevosClientes();
        // console.log(clientes);
        // const pedidos = await descargarUltimosPedidos();
        // console.log(pedidos);

        // Ejecuta las dos funciones en paralelo. Retorna un arreglo.
        const resultado = await Promise.all([descargarNuevosClientes(),descargarUltimosPedidos()]);
        console.log(resultado[0]);
        console.log(resultado[1]);
    } catch (error) {
        console.log(error);
    }
    console.log("App lista")
}

app();

console.log("Este codigo no se bloquea");



