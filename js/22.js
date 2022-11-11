//SELECTORES DEL DOM- querySelector

//usaremos el objeto document de js, este hace referencia a todo el html que tengamos en nuestra pagina, si lo escribimos en consola podemos ver que selecciona todo el docuemnto o la pagina web.

//para seleccionar un elemento del dom utilizo document.querySelector("") y entre comillas le paso el elemento que quiero, funcionana igual que en css,si lo quiero seleccionar por etiqueta paso la etiqueta,si es por clase paso .nombre de la clase o por id paso # y el id. Si lo capturo por clase en consola puedo expandir y me muestra todos los metodos que puede usar ese elemento.querySelector me retorna solo un elemento, con querySelectorAll puedo capturar todos los elementos que haya en mi DOM de ese elemento , por ejemplo si quiero capturar todos los enlaces "a" de mi DOM que tenga en una clase utilizo querySelectroAll.


//querySelector
const heading = document.querySelector(".heading")

console.log(heading)
console.log(heading.textContent)


//querySelectorAll
const enlaces = document.querySelectorAll(".navegacion a")
console.log(enlaces)
