//operador ternario- es un if en una sola linea, lo del ? a la derecha es lo que se ejecuta si la condicion se cumple, y lo de los : a la derecha es lo que se ejecuta si no se cumple.

const autenticado = true

autenticado ?
    console.log("Usuario autenticado") :
    console.log("Usuario no autenticado")

//doble ternario

const saldo = 600
const pagar = 4000
const tarjeta = true

saldo > pagar ?
    console.log("Puedes pagar con saldo") :
    tarjeta ?
        console.log("Puedes pagar con tarjeta") :
        console.log("No, no puedes pagar")