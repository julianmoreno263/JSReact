//multiples async-await y performance, si queremos consultar a multipleas APIS utilizamos la clase Promise(), en la cual podemos enviar varios fetch, cada uno consultara la respectiva url de la API, de este modo se mejora el tiempo de consulta, no hay que esperar a que se consulte una API y dedespues la otra, ya que si una API no depende de la otra no hay necesidad de hacer que espere primero el resultado de la consulta de una para hacer la consulta de la otra. Se utiliza el metodo all() y se pasa un array en donde se hacen los fetchs de cada API. Con este codigo lo que se consigue es que ambos fetchs arranquen al tiempo y asi sea mas rapida la consulta, ahora una consulta sera mas rapida que la otra porque una API solo tiene 500 resultados y la otra tiene 5000, pero ambas arrancan al tiempo. Puedo ver el performance o rendimiento de las consultas utilizando la API de performance de js junto al metodo now().


const url1 = "https://jsonplaceholder.typicode.com/comments"
const url2 = "https://jsonplaceholder.typicode.com/photos"

//generalmente el fetch lo usamos dentro de una funcion.
consultarAPI = async () => {

    //asi evaluo el rendimiento de las consultas
    const inicio = performance.now()

    const [respuesta1, respuesta2] = await Promise.all([fetch(url1), fetch(url2)])
    const resultado1 = await respuesta1.json()
    const resultado2 = await respuesta2.json()

    console.log(resultado1)
    console.log(resultado2)

    const fin = performance.now()
    console.log(`Ejecución de las consultas en milisegundos: ${fin - inicio} ms`)


}

consultarAPI()