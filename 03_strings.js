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

console.log(nombre)


