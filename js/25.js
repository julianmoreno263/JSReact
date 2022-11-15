//eventos- inputs

//vamos a ver los eventos mas comunes que se pueden llamar para los elementos inputs.

const inputNombre = document.querySelector(".nombre")

//evento input
// inputNombre.addEventListener("input", () => {
//     console.log("Escribiendo en el input")
// })

//evento keydown
// inputNombre.addEventListener("keydown", () => {
//     console.log("Escribiendo en el input")
// })

//evento keyup
// inputNombre.addEventListener("keyup", () => {
//     console.log("Escribiendo en el input")
// })



//si quiero capturar lo que se va escribiendo en el input utilizo el objeto evento y el value
// inputNombre.addEventListener("input", (e) => {
//     console.log(e.target.value)
// })


//si quiero que en input password se vaya viendo el texto y despues se oculte con los puntos negros lo puedo hacer con un evento y un setTimeOut
const inputPassword = document.querySelector(".password")
inputPassword.addEventListener("input", () => {
    inputPassword.type = "text"
    setTimeout(() => {
        inputPassword.type = "password"
    }, 100);
})