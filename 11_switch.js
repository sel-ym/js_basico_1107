let dia_semana = "jueves"

// suitch evalua si algo cumple el valor...

switch (dia_semana) {
    case "lunes":
        mensaje = "Hoy es laborable"
        break
    case "martes":
        mensaje = "Hoy es laborable"
        break
    case "miercoles":
        mensaje = "Hoy es laborable"
        break
    case "jueves":
        mensaje = "Hoy es laborable"
        break
    case "viernes":
        mensaje = "Hoy es laborable"
        break
    default
        mensaje = "Hoy es no laborable"
}

console.log(mensaje);

switch (dia_semana) {
    case "lunes":
    case "martes":
    case "miercoles":
    case "jueves":
    case "viernes":
        mensaje = "Hoy es laborable"
        break
    default
        mensaje = "Hoy es no laborable"
}

