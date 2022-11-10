//unir dos o mas objetos, lo que hago es utilizar un object method llamado assign(), con esto lo que hago es crear un nuevo objeto y asignarle con assign() los objetos que quiero unir.Pero este metodo no es eficaz porque solo me saca el nombre del objeto cliente, el otro no, ademas modifica los objetos originales y esto no se debe de hacer en js ni en react por lo del state,no se deben de modificar los objetos originales. Lo que se debe hacer es utilizar el spreadoperator, el cual lo que hace es tomar una copia del objeto original,asi no se manipula el original,se deje intacto.

const producto = {
    nombre: "tablet",
    precio: 200,
    disponible: true
}

const cliente = {
    nombre: "julian",
    premium: true
}

//utilizo assign pero no se recomienda porque modifica los objetos originales.
// const nuevoObjeto = Object.assign(producto, cliente)// no se debe de hacer
// console.log(nuevoObjeto)


//spreadOperator, crea copias de los objetos originales y ya no los modifica, pero si la propiedad nombre se repite en ambos objetos solo toma la del segundo,osea perdemos informacion, entonces lo que se hace es en el nuevo objeto decirle con el spread operator que cree copias de cada objeto poniendo cada spread operator de forma individual.
const nuevoObjeto2 = {
    producto: { ...producto },
    cliente: { ...cliente }
}
console.log(nuevoObjeto2)