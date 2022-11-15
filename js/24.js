//Eventos - click

//con addEventListener() ponemos a la escucha de un evento a un elemento del DOM, para esto este metodo recibe el tipo de evento a escuchar y una funcion que se ejecuta cuando se produce el evento. La funcion se puede declarar dentro del mismo addEventListener o se puede declarar por fuera y se llama dentro del addEventListener. addEventListener no puede ejecutar un evento en multiples elementos del DOM, osea, solo puede estar escuchando un evento para un elemento nada mas, si yo le trato de pasar un evento a un elemento que sea descendiente de otro no sirve,en el caso de que necesite pasar un evento a multiples elementos como por ejemplo varios elementos "a", debo iterar sobre esos elementos y asi ya puedo pasar ese evento.

const heading = document.querySelector(".heading")


//crear la funcion fuera del metodo y se llama dentro de el metodo sin los ()
// heading.addEventListener("click", clickHeading)
// function clickHeading() {
//     console.log("Diste click en el heading")
// }

//crear la funcion  dentro del metodo
heading.addEventListener("click", () => {
    heading.textContent = "Nuevo heading al dar click"
})

//con multiples elementos
const enlaces = document.querySelectorAll(".navegacion a")
enlaces.forEach(enlace => {
    enlace.addEventListener("click", () => {
        console.log("Click en un enlace")
    })
})