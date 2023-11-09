let mensaje_inicial = `Here we go!
¿Cómo te llamas?`


let nombre_jugador = prompt(mensaje_inicial)
alert(`Bienvendo al torneo ${nombre_jugador}`)

let menu = `
OPCIONES DEL JUEGO
==================
Elige el númro correspondiente a 
la jugada que prefieres, ${nombre_jugador}:

1 - Piedra
2 - Papel
3 - Tijera

`
// let nombre_jugador = "Asimov"
let jugada_humano = prompt(menu)

if ((jugada_humano == null) || (jugada_humano == "" || isNaN(jugada_humano))) {
    alert("Game Over")
}



let texto_resulucion_partida = ""

if (jugada_humano == 1) {
    texto_resulucion_partida += `Piedra <-- la jugada de ${nombre_jugador}\n`
} else if (jugada_humano == 2) {
    texto_resulucion_partida += `Papel <-- La jugada de ${nombre_jugador}\n`;
} else {
    texto_resulucion_partida += `Tijeras <-- La jugada de ${nombre_jugador}\n`;
}

// Jugada del PC
let jugada_PC = getRandomInt(1,4)
if (jugada_PC == 1) {
    texto_resulucion_partida += `Piedra <-- la jugada del PC\n`;
} else if (jugada_PC == 1) {
    texto_resulucion_partida += `Papel <-- la jugada del PC\n`
} else {
    texto_resulucion_partida += `Tijera <-- la jugada del PC\n`
}


//Partida
if (jugada_humano == jugada_PC) {
    texto_resulucion_partida += ` "Habéis empatado\n`;
} else if ((jugada_humano ==1 && jugada_PC == 3)
                || (jugada_humano==2 && jugada_PC  ==1)
                || (jugada_humano==3 && jugada_PC==2))
    {texto_resulucion_partida += `Has ganado ${nombre_jugador}!\n`;
} else {
    texto_resulucion_partida += `Has perdido ${nombre_jugador}!\n`;
}



alert(texto_resulucion_partida)

// No habrá partida si no "pone nombre o" elige opción, y que aparezca "Juego Finalizado"

// let fecha = 2023/11/09

// console.log(fecha);
// console.log(getRandomInt(1, 4));


// Notesé que también en este caso `min` será incluido y `max` excluido
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
//  Las funciones sí se pueden poner al final del código y aunque las ejecute antes, no da error. 
// A diferencia de las variables, que tienen que definirse antes de clg (consolog)