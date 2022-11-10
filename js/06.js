//destructuring de dos objetos o mas, si en dos objetos tengo la misma propiedad nombre por ejemplo, al hacer destructuring de cada uno me sale un error porque se esta repitiendo la variable nombre, para remediar esto puedo usar un alias en una de ellas y asi ya puedo hacer el destructuring, porque por ejemplo si los objetos los obtengo de una API o una bd no puedo modificarlos,entonces uso un alias.

const producto = {
    nombre: "tablet",
    precio: 200,
    disponible: true
}

const cliente = {
    nombre: "julian",
    premium: true
}

//destructuring
const { nombre, precio, disponible } = producto
const { nombre: miCliente, premium } = cliente//aqui uso un alias para el nombre con dos puntos

console.log(nombre, precio, disponible)
console.log(miCliente, premium)
