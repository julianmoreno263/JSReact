//revisar varias condiciones- operadores && - || - else if

const saldo = 600
const pagar = 400
const tarjeta = true

// if (saldo > pagar) {
//     console.log("Puedes pagar")
// } else if (tarjeta) {
//     console.log("Puedes pagar con tu tarjeta")
// } else {
//     console.log("No,no puedes pagar")
// }



//con || al menos una condicion debe cumplirse

// if (saldo > pagar || tarjeta) {
//     console.log("Puedes pagar")
// } else {
//     console.log("No puedes pagar")
// }



//con && todas las condiciones deben de cumplirse

if (saldo > pagar && tarjeta) {
    console.log("Puedes pagar")
} else {
    console.log("No puedes pagar")
}