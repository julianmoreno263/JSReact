//comparacion y operador estricto

const num1 = 20
const num2 = "20"

/*
    == (Comparacion no estricta, solo revisa el valor)
    === (Comparacion estricta,revisa el valor y el tipo de dato)
*/

if (num1 === num2) {
    console.log("Si son iguales")
} else {
    console.log("No,no son uguales")
}

//si la condicion es true, no hay necesidad de poner el operador comparador
const autenticado = true

if (autenticado) {
    console.log("Autenticado")
}