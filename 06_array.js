// El array se crea como una variable

// ARRAYS
let array_1 = ["Anna", "Sara", "John"]
// console.log(typeof array_1);

let nombre = "Pep"
console.log(nombre.length);
console.log(nombre[2]);
console.log(array_1.length);

let platano = "patata"
let array_frutas = ["mango", "pera", "cereza", platano, "castaña"]
console.log(array_frutas[3]);
console.log(array_frutas.length);
console.log(array_frutas[array_frutas.length-1]);
// Así obtengo el último elemento del array
// Indices
// Si quiero cambiar un valor 1ro accedo al array
array_1[2] = "naranja"
console.log(array_frutas);


let array_frutas_fall = ["mango", "pera", "cereza", platano, "castaña"]
let array_frutas_sum = ["melocotón", "melón", "sandia"]

array_frutas_fall.push(array_frutas_sum)
console.log(array_frutas_fall);
let array_unificado = array_frutas_fall.flat()
console.log(array_unificado);


let array_frutas_final = array_frutas_fall.concat(array_frutas_sum)
console.log(array_frutas_final);

