// Con promise
function obtenerEmpleadosPromise(){
    const archivo="js/empleados.json";
    fetch(archivo)
        .then(resultado=>resultado.json())
        .then(datos =>{
            console.log(datos);
            const { empleados } = datos;
            // console.log(empleados);

            empleados.forEach(empleado => {
                console.log(empleado);
                
            });
        })
        .catch(error=>console.log("Hubo un error",error))
}


// Con async/await
async function obtenerEmpleadosAsyncAwait(){
    const archivo="js/empleados.json";
    const resultado = await fetch(archivo);
    const datos = await resultado.json();
    console.log(datos);
    
}
obtenerEmpleadosPromise();
obtenerEmpleadosAsyncAwait();