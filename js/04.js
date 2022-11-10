//Objetos en js

const producto = {
    nombre: "tablet",
    precio: 200,
    disponible: true
}


console.log(producto)
console.table(producto)
console.log(producto.nombre)

//destructuring
const { nombre, precio, disponible } = producto
console.log(precio)

//con el object literal enhacement lo que hago es poner variables normales en un ojeto, pero al pasar esas variables dentro del objeto debo de llamarlas igual a como las declare(con el mismo nombre)

const autenticado = true
const usuario = "julian"

const miObjeto = {
    autenticado,
    usuario
}

console.table(miObjeto)