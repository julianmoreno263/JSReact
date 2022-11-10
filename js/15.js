//arrow functions y array methods


const tecnologias = ["HTML", "CSS", "Javascript", "React", "Nodejs"]


const nuevoArray = tecnologias.map(tech => {
    if (tech === "HTML") {
        return "PYTHON"
    } else {
        return tech
    }
})



const nuevoArray2 = tecnologias.filter((tech) => {
    return tech !== "HTML"
})


console.log(nuevoArray2)