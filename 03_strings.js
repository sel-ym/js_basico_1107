// STRINGS = cadenas de texto 

let ejemploUno = "Hola"
let ejemploDos = 'Hola'
let ejemploTres = `Hola` //Aportación en 2014

// let fraseUno = "Ella me dijo "Hola"" (No puedo hacer dobles comillas)
let fraseUno = 'Ella me dijo "Hola"'
console.log(fraseUno)

let nombre = "Sara"
let fraseDos = `${nombre.toUpperCase()} me dijo "hola"`
console.log(fraseDos)

// formas antigua de crear una frase
let saludo1 = "buenos"
let saludo2 = "días"
let saludoFinal = saludo1 + saludo2 //+ <-- concatena, une
let saludo_Final = saludo1 + saludo2 
console.log(saludoFinal)


console.log("el texto tiene", nombre.length, 'caracteres');
console.log("el texto tiene $[nombre,length] caracteres")


nombre = "hill"
console.log(nombre[0])

nombre ="feDeriCO"
nombre = nombre[0].toUpperCase() + nombre.toLowerCase()


console.log(nombre.charAt(0))
// cartAt obtiene el caracter en la posición indicada 
console.log(nombre[0])
console.log(nombre.slice(1));
// slice corta desde la posición indicada en parentesis

console.log(nombre.charAt(0).toUpperCase())
console.log(nombre.slice(1).toLowerCase())

console.log(nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase())

let nombre_completo = "  Pérez Gonzalez, Maria  "
let nombre_sin_espacios = nombre_completo.trim()
// trim elimina los espacios del medio y del final 
console.log(nombre_sin_espacios);

// cadena de texto a listas >   split
// console.log(nombre_sin_espacios.split(", "))
let nombre_arreglado = nombre_sin_espacios.split(", ")

nombre_arreglado = nombre_arreglado[1]+" "+nombre_arreglado[0]
console.log((nombre_arreglado));

// ...
let fecha = "2023/11/8"
// Hoy es 8 del 11 de 2023

let fecha_dia = fecha.pop()
let fecha_mes = [fecha.charAt(5,6)]
let fecha_año = [fecha.charAt(0,1,2,3)]
let fecha_arreglada = "Hoy es " + fecha_dia + " del " + fecha_mes + " de " + fecha_año

let array_fecha = fecha.split("/")
console.log(array_fecha);
console.log("Hoy es ${array_fecha[2]} del ${fecha[1]};

