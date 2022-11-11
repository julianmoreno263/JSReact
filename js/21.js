//scope,alcanze o ambito  de las variables en js

//variable de ambito global
const precio = 300

//variabñle de ambito local(solo existe dentro del bloque de codigo)
const unaFuncion = () => {
    const precio = 400
    console.log(precio)
}

unaFuncion()

//NOTA: SI EN LA FUNCION NO ESTUVIERA LA VARIABLE precio, JS LA BUSCA EN EL SCOPE GLOBAL, ENTONCES IMPRIMIRIA 300, PERO NO FUNCIONA AL REVES, OSEA SI LA VARIABLE GLOBAL NO EXISTIERA NO LA VA A BUSCAR EN LA FUNCION,SIMPLEMENTE SALE UN AVISO DE QUE NO EXISTE.