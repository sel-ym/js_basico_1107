// BUCLE FOR "CLÁSICO"

let array_frutas = ["mango", "pera", "cereza", "platano", "castaña"]
let array_frutas_may = []
// array_frutas_may[0].toUpperCase() + array_frutas.toLowerCase()

// for (let i=0; i<array_frutas.length; i = i+1) {
//     for (let i=0; i<array_frutas.length i++ ) {
//     console.log(array_frutas(i));
// }

for (let i = 0; i < array_frutas.length; i++) {
    // const array_frutas_may = array_frutas[i];
    // "mejor" const^ cambiar a "let" por si luego lo queremos cambiar...>
    // let array_frutas_may = array_frutas[i];
    // console.log(array_frutas[i]);
    array_frutas_may[i] = array_frutas[i].charAt(0).toUpperCase() + array_frutas[i].slice(1).toLowerCase()
    // o en lugar de .charAt (que es para texto solamente) > [0]
    //array_frutas_may.push(array_frutas)
    // array_frutas_may.push[]

    array_frutas[i]
}

// console.log(array_frutas_may.charAt(0).toUpperCase() + array_frutas_may.slice(1).toLowerCase())
console.log(array_frutas_may)

// Dentro del for: 
// let fruta_cor = ...
// y agregar: 
// array_frutas_may.push[fruta_corr]
// push añade elementos al final del array

array_frutas.push("limones")
// añade un elemento al final 
console.log(array_frutas);

// fruta ="i" x
// fruta = i[0].toUpperCase() + i.toLowerCase() x

// array_frutas.pop()
// pop quita el último elementos y lo guarda
let ultima_fruta = array_frutas.pop()
console.log(array_frutas)
console.log(ultima_fruta)

let primera_fruta = array_frutas.shift()
console.log(primera_fruta);
console.log(array_frutas)
// metodos destructivos xq destruyen el array



