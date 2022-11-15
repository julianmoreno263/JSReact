//eventos- submit

const formulario = document.querySelector("#formulario")

formulario.addEventListener("submit", (e) => {
    e.preventDefault()//esto previene el action por defecto de un formulario que es GET

    //asi capturo los valores de los inputs
    const nombre = document.querySelector(".nombre").value
    const password = document.querySelector(".password").value

    //podemos validar el formulario
    if (nombre === "" || password === "") {
        console.log("Todos los campos son obligatorios")
    } else {
        console.log("Enviaste formulario")
    }

})