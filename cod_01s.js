alert("Hey!")

let respuesta = confirm("Qué edad tienes?")


let codigo01 = "<p style= 'color:red'>" + respuesta + "</p>"
document.getElementById("ventana01s").innerHTML = codigo01s

let edad = prompt(mensaje)
// alert(`Eres ${edad} de edad`)




let edad = prompt("Qué edad tienes?")

let mensaje = ""
if (edad < 18){
    mensaje = `Eres menor de edad`}
    else (edad >= 18){
    mensaje = `Eres mayor de edad`}
