const boton = document.querySelector("#boton");

boton.addEventListener('click', ()=> {
    Notification.requestPermission()
        .then(resultado => console.log(`El resultado es ${resultado}`))
        .catch(error => console.log(error))
});


if(Notification.permission==="granted")
{
    new Notification("Esta es una notificación", {
        icon: "img/icon.png",
        body: "Ejemplo de notificación con JS"
    })
}