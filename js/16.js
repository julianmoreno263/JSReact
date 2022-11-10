//funciones- otros array methods utiles

const tecnologias = ["HTML", "CSS", "Javascript", "React", "Nodejs"]
const numeros = [30, 40, 20]


let nuevoArray


//filter me trae los elementos que cumplan la condicion en la funcion, y crea un nuevo array.
nuevoArray = tecnologias.filter((tech) => {
    return tech !== "HTML"
})


//includes() me ayuda a comprobar si existe un elemento en el array
// const resultado = tecnologias.includes("React")

//some() comprueba si al menos un elemento cumple con la condicion
// const resultado = numeros.some(numero => numero > 15)


//find() encuentra el primer elemento que cumple la condicion
// const resultado = numeros.find(numero => numero > 15)


//every() retorna true o false si todos cumplen la condicion
// const resultado = numeros.every(numero => numero > 5)


//reduce() es util en un carrito de compras,porque si quiero hacer la suma de los productos del carro la hace si necesidad de crear un for para esto. Se le pasa un total y un numero en sus parametros, y se le indica desde que numero debe ir sumando y asi hace la suma mas rapido.Aqui se le indica que sume desde cero.
// const resultado = numeros.reduce((total, numero) => numero + total, 0)


//forEach()- permite acceder a cada elemento del array
tecnologias.forEach(tech => {
    console.log(tech)
})


//map(), se utiliza mas en react- permite crear un nuevo array y se le pone return
const arrayMap = tecnologias.map(tech => {
    return tech
})


//estos metodos que vimos no mutan el array original,lo que es importante en React, en la pagina de https://doesitmutate.xyz/  podemos ver que metodos mutan o cuales no el array original. Tambien si en consola expandimos el triangulito que aparece al lado de un array,puedo ver el prototype de ese array y me salen tambien todos los metodos de los arrays que puedo usar.







console.log(nuevoArray)