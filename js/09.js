//Manipular arrays, vamos a ver como hacer operaciones con los arrays

const tecnologias = ["HTML", "CSS", "Javascript", "React", "Nodejs"]


//añadir elementos al array
// tecnologias.push("GraphQL")//AÑADE AL FINAL
// tecnologias.unshift("GraphQL")//AÑADE AL INICIO

//ASI SE AÑADEN ELEMENTOS PERO SE MODIFICA EL ARRAY ORIGINAL,EN REACT NO SE DEBE DE MODIFICAR EL ELEMENTO ORIGINAL,ENTONCES PODEMOS USAR EL SPREADOPERATOR PARA CREAR UN NUEVO ARRAY QUE TENGA UNA COPIA DEL ORIGINAL

// const nuevoArray = [...tecnologias, "GraphQL"]//hago una copia y agrego  nuevo elemento al final
// const nuevoArray = ["GraphQL", ...tecnologias]//hago una copia y agrego  nuevo elemento al inicio




//eliminar elementos del array
// tecnologias.pop()//elimina el ultimo elemento
// tecnologias.shift()//elimina al inicio

//para eliminar un elemento especifico del array uso splice(), le paso el indice del elemento que quiero eliminar y el numero de elementos que quiero eleiminar a partir de ese indice

// tecnologias.splice(2, 1)//aqui solo elimino el elemento del indice 2

//como siempre, en react no se debe de modificar el array original, por lo que en react mejor usamos el metodo filter(), este metodo tiene una funcion dentro la cual se ejecuta por cada elemento que tenga el array, y en el codigo de la funcion debe tener un return que me retorne la operacion que quiero hacer sobre ese array, entonces en react se crea mejor un array nuevo y se usa filter para operar y asi no modificar el array original. En el ejemplo la funcion me retorna un array con los elementos diferentes a HTML. La ventaja con esto es que al trabajar con react solo uso este metodo filter para manipular mis arrays y no modificar el original.

// const nuevoArray = tecnologias.filter((tech) => {
//     return tech !== "HTML"
// })

// console.table(nuevoArray)


//reemplazar elementos o modificarlos

//asi se hace en js normal,pero modifica el array original

// tecnologias[0]="Python"//pero en react no es valido

//en react para modificar un array usamos map() en un array nuevo
const nuevoArray = tecnologias.map(tech => {
    if (tech === "HTML") {
        return "PYTHON"
    } else {
        return tech
    }
})

console.table(nuevoArray)


// NOTA: EN RESUMEN,PARA REACT SE UTILIZA SPREADOPERATOR,FILTER Y MAP PORQUE NO MODIFICAN LOS ELEMENTOS ORIGINALES SINO QUE SE CREAN UNOS NUEVOS.

console.table(tecnologias)

