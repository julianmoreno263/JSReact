//template strings, es una forma de poder concatenar strings con variables en js, para esto se  utilizan las comillas invertidas o backticks. Dentro de estas comillas invertidas podemos concatenar variables con string mas facilmente,se entiende mas la sintaxis, las variables se van asando entre ${}. Tambien podemos mandar llamar una funcion entre ${}.

const producto = "Tablet de 12 pulgadas"
const precio = 400
const marca = "Orange"

const funcionTexto = () => {
    return "Este Texto proviene de la función"
}

console.log(`Nombre: ${producto} - Precio: $${precio} dolares - Marca: ${marca}, ${funcionTexto()}`)