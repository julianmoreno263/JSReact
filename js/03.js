/*estructuras y tipos de datos en js

1- undefined
2- boolean
3- number
4- string
5- function
6- symbols
7- big int
8- object
9- null

NOTA: EN JS EL TIPO DE DATO SE ALMACENA EN EL VALOR DE LA VARIABLE , NO EN EL NOMBRE,OSEA, CUANDO SE DA UN VALOR A UNA VARIABLE ESTA TOMA EL TIPO DE DATO SEGUN ESE VALOR DE FORMA DINAMICA.
*/


//undefined se crea cuando se crea una variable sin valor
// let cliente
// console.log(cliente)

//BOOLEAN- TRUE - FALSE
// const descuento = true
// console.log(typeof descuento)

//number, en js todos los numeros son de tipo number,sean decimales, etc.
// const num1 = 20.20
// const num2 = 30
// const num3 = -100

// console.log(typeof num1)
// console.log(typeof num2)
// console.log(typeof num3)


//strings
// const alumno = "Juan"
// let producto = "Monitor de 20 pulgadas"

// console.log(typeof alumno)
// console.log(typeof producto)


//big int- es para representar un numero muy grande, se debe utilizar la funcion BigInt(), no se pueden hacer operaciones entre numeros normales y bigint porque sale un error, para poder hacer operaciones debemos cambiar el tipo de dato del bigint a number normal y asi ya se pueden operar.Cambiar el tipo de dato se llama "coercion" en js.

// const num = BigInt(27464874858575757484849474636638393)
// console.log(typeof num)



//Symbol, es un tipo de dato unico, aunque haya dos simbol con el mismo valor ambos seran diferentes y unicos.Se utiliza el constructor Symbol para crearlos.Para acceder a su valor usamos el metodo valueOf()

// const num = Symbol(30)
// const num1 = Symbol(30)

// console.log(num === num1)//sale false porque los simbols son unicos, no son iguales
// console.log(num.valueOf())


//null, es un tipo de dato objeto con valor nulo, el null y el object son de tipo objeto, los arrays,el map,etc son de tipo objeto.
const descuento = null
console.log(typeof descuento)//sale que es de tipo object



