//funciones-function expression, a diferencia de function declaration, en expression no se puede llamar la funcion antes de declararla, porque como usamos una const, js escanea y no ve ninguna funcion para registrar en el primer momento,entonces nos saca error si intentamos llamarla antes de declararla,porque esta viendo una const y no una funcion.Tambien se les puede pasar parametros normal y tambien pueden retornar los valores.

const suma = function (num1, num2) {
    return num1 + num2
}

const resultado = suma(30, 20)

console.log(resultado)