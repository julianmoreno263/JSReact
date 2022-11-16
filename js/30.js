// Fetch API con Async-await, se abrevia mas el codigo para las consultas a las APIS. El await bloquea el codigo hasta que haya una respuesta en esa linea.


const url = "https://jsonplaceholder.typicode.com/comments"

//generalmente el fetch lo usamos dentro de una funcion.
consultarAPI = async () => {
    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
    resultado.forEach(comentario => {
        console.log(comentario)
    });
}

consultarAPI()