//destructurin de arrays, si quiero por ejemplo  capturar el elemento "HTML", creo la variable html del array de tecnologias y asi puedo imprimir el valor "HTML",pero esto pasa porque se esta imprimiendo la primera posicion del array,las variables se enlazan con las posiciones del array,  en arrays se utilizan [] para el destructuring.

const tecnologias = ["HTML", "CSS", "Javascript", "React", "Nodejs"]

//asi puedo capturar todas las variables del array
// const [html, css, javascript, react, nodejs] = tecnologias

//si solo quiero capturar un elemento del array, pongo solo comas antes de ese elemento
const [, , , , nodejs] = tecnologias
console.log(nodejs)


