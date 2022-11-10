//funciones en js, bloque de codigo que realiza una accion especifica,puede ser reutilizable 


//function declaration
// function suma() {
//     console.log(2 + 2)
// }


//FUNCIONES CON PARAMETROS
// function suma(num1, num2) {
//     console.log(num1 + num2)
// }


//FUNCIONES CON PARAMETRO POR DEFECTO
// function suma(num1, num2 = 0) {
//     console.log(num1 + num2)
// }


//FUNCIONES QUE RETORNAN VALORES, SE USAN MUCHO EN REACT, LOS HOOKS SON FUNCIONES CON RETURN
function suma(num1, num2 = 0) {
    return num1 + num2
}


//llamada de la funcion
const resultado = suma(10)

console.log(resultado)


//NOTA: SE PUEDE PONER LA LLAMADA A LA FUNCION ANTES DE SU DECLARACION Y EL CODIGO SE EJECUTA SIN PROBLEMAS,LO QUE NO PASA EN OTROS LENGUAJES, ESTO ES POR COMO TRABAJA INTERNAMENTE JS, JS PRIMERO LEE TODO EL SCRIPT Y SI VE UNA FUNCION LA REGISTRA,Y EN UNA SEGUNDA VUELTA YA CON LA FUNCION REGISTRADA EJECUTA EL CODIGO,POR ESO NO MARCA ERROR,ES PORQUE JS TRABAJA ASI INTERNAMENTE,PRIMERO REGISTRA LAS FUNCIONES Y YA REGISTRADAS LAS PUEDE EJECUTAR.


