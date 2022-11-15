//generar html con Javascript

//puedo generar elementos html con el metodo createElement() y dentro le paso  la etiqueta que quiero crear de html pero en mayuscula, porque es el standrar que se utiliza,aunque despues el DOM la pasa a minuscula se escribe en mayuscula para generarla.Asi si quiero que se muestre contenido html en la agina y no en consola utilizo estos elementos que cree desde js.

const formulario = document.querySelector("#formulario")

formulario.addEventListener("submit", (e) => {
    e.preventDefault()//esto previene el action por defecto de un formulario que es GET

    //asi capturo los valores de los inputs
    const nombre = document.querySelector(".nombre").value
    const password = document.querySelector(".password").value

    //para que solo se genere un mensaje de alerta nada mas,capturo el elemento que tenga la clase .alerta y valido si ya existe pues que lo remueva,asi solo saldra un mensaje aunque de varios clicks.
    const alertaPrevia = document.querySelector(".alerta")
    if (alertaPrevia) {
        alertaPrevia.remove()
    }

    //aqui genero elemento html a partir de javascript,y puedo agregarle clases a este elemento
    const alerta = document.createElement("DIV")
    alerta.classList.add("alerta")//agrege la clase "alerta" al div

    //podemos validar el formulario
    if (nombre === "" || password === "") {
        alerta.textContent = "Todos los campos son obligatorios"
        alerta.classList.add("error")
    } else {
        alerta.textContent = "Formulario enviado"
        alerta.classList.add("exito")

    }

    //aqui se agrega el nuevo elemento html creado desde js,con appendChild le agrego al formulario el nuevo elemento hijo
    formulario.appendChild(alerta)

})