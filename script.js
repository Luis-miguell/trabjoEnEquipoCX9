document.tittle = "Proyecto Colaborativo - CX9"

let user = document.getElementById("User")
let pass = document.getElementById("Password")

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault()

    alert(`Nombre: ${user.value} \nContraseña: ${pass.value}`)

})