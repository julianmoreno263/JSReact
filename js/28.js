//Imports y Exports

//al importar mi funcion del archivo de funciones.js ya lo puedo usar aqui, pero si vamos a la consola nos sale un error que dice "no se puede usar un import fuera de un modulo", en si esto es porque en el index.html en el script debemos psar el atributo type="module" para que reconozca el archivo js como un modulo.Si queremos exportar multiples funciones ya no se utiliza el export default, sino solamente el export y abro {}, como un objeto, y pongo el nombre de las funciones que voy a exportar dentro de las llaves, y al importar tambien deben de ir entre {} los nombres de las funciones a importar,osea un destructuring.

import { suma, resta } from "./funciones.js"



const resultadoSuma = suma(20, 30)
const resultadoResta = resta(40, 30)


console.log(resultadoSuma)
console.log(resultadoResta)