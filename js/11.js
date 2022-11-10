//Iteradores de arrays, map y filter iteran sobre arrays y tambien esta forEach, estas tres tiene una funcion que se itera por cada elemento del array.

const tecnologias = ["HTML", "CSS", "Javascript", "React", "Nodejs"]


//forEach()- permite acceder a cada elemento del array
tecnologias.forEach(tech => {
    console.log(tech)
})


//map(), se utiliza mas en react- permite crear un nuevo array y se le pone return
const arrayMap = tecnologias.map(tech => {
    return tech
})



console.log(arrayMap)
