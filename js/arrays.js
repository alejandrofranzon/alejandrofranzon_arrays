function listarservicio() {
    total = parseInt(prompt("Ingresar servicio requerido"))
    for (let i = 0; i < servicio.length; i++) {
        console.log(servicio[i])
    }
}

function agregarservicio() {
    let nuevoservicio = prompt("Agrege el servicio")
    let resultado = servicio.includes(nuevoservicio)
        if (!resultado) { 
            servicio.push(nuevoservicio)
        } else {
            console.warn("El servicio", nuevoservicio, "ya figura en la lista.")
        }
}

function quitarservicio() {
    let aQuitar = prompt("Ingrese el servicio a quitar")
    let indice = servicio.indexOf(aQuitar)
    if (indice !== -1) {
        let resultado = servicio.splice(indice, 1)
        console.warn("Se ha eliminado el servicio", resultado)
    } else {
        console.error("No se ha encontrado el servicio", aQuitar)
    }
}

function buscarservicio() {
    total = parseInt(prompt("que servicio buscas"))
    for (let i = 0; i < servicio.length; i++) {
        console.log(servicio[i])
    }
}
