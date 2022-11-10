//objetos- manipulacion

const producto = {
    nombre: "tablet",
    precio: 200,
    disponible: true
}

//si quiero que mi objeto no se pueda manipular utilizo el objects methods  freeze
// Object.freeze(producto)

//seal me permite reescribir las propiedades pero no añadir ni eliminar
Object.seal(producto)


//cambiar el valor de una propiedad del objeto
producto.nombre = "Monitor"

//agregar una nueva propiedad
producto.imagen = "imagen.png"

//eliminar una propiedad
delete producto.disponible


console.table(producto)