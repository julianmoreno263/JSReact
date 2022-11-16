//fetch API y promises, fetch sirve para consumir una API o un servicio hospedado en otro servidor.Con la pagina de jsonplaceholder podemos tener una API para pruebas facilmente y esta nos da las respuestas en formato json (https://jsonplaceholder.typicode.com/). Fetch trabaja con promesas entonces usamos .then() para ejecutar estas promesas.

const url = "https://jsonplaceholder.typicode.com/comments"

//generalmente el fetch lo usamos dentro de una funcion.
consultarAPI = () => {
    fetch(url)
        .then(respuesta => {
            return respuesta.json()
        })
        .then(resultado => {
            resultado.forEach(comentario => {
                console.log(comentario)
            });
        })
}

consultarAPI()