//manipular el html con js

//como lo que capturo en si es un objeto, puedo utilizar las propiedades de este objeto para modificarlo,por ejemplo el textContent lo puedo modificar accediendo con el punto.


const heading = document.querySelector(".heading")
heading.textContent = "Nuevo Heading"
console.log(heading.textContent)


//capturando un input del formulario por su id, y con la propiedad value le paso un valor
const inputNombre = document.querySelector("#nombre")
inputNombre.value = "Valor por defecto"//esto es lo mismo que ponerle a la etiqueta html el value
console.log(inputNombre)



//si quiero modificar el textContet de los enlaces no lo puedo hacer directamente porque querySelectorAll me saca un array, entonces debo iterar sobre ese array y asi ya puedo con un forEach pasar el nuevo contenido a cada enlace.

const enlaces = document.querySelectorAll(".navegacion a")
enlaces.forEach(enlace => enlace.textContent = "NuevoTextoEnlace")

