// Obtener elementos del DOM
const jugador1 = document.getElementById('jugador1');
const jugador2 = document.getElementById('jugador2');
const opciones = document.getElementById('opciones');
const mensajeResultado = document.getElementById('mensaje');
const reiniciarBtn = document.getElementById('reiniciar');

// Variables para almacenar las jugadas de los jugadores
let jugadaJugador1 = null;
let jugadaJugador2 = null;

// Función para seleccionar el jugador
function seleccionarJugador(jugador) {
  opciones.classList.remove('oculto');
  jugador1.classList.remove('seleccionado');
  jugador2.classList.remove('seleccionado');

  if (jugador === 'jugador1') {
    jugador1.classList.add('seleccionado');
    jugadaJugador1 = prompt('Jugador 1, elige: piedra, papel o tijera');
    jugador1.textContent = `Jugador 1: ${jugadaJugador1}`;
  } else {
    jugador2.classList.add('seleccionado');
    jugadaJugador2 = prompt('Jugador 2, elige: piedra, papel o tijera');
    jugador2.textContent = `Jugador 2: ${jugadaJugador2}`;
    opciones.classList.add('oculto');
    reiniciarBtn.classList.remove('oculto');
    determinarResultado();
  }
}

// Función para determinar el resultado del juego
function determinarResultado() {
  const reglas = [
    { jugada1: 'piedra', jugada2: 'tijera', resultado: 'Jugador 1 gana' },
    { jugada1: 'tijera', jugada2: 'papel', resultado: 'Jugador 1 gana' },
    { jugada1: 'papel', jugada2: 'piedra', resultado: 'Jugador 1 gana' },
    { jugada1: 'tijera', jugada2: 'piedra', resultado: 'Jugador 2 gana' },
    { jugada1: 'papel', jugada2: 'tijera', resultado: 'Jugador 2 gana' },
    { jugada1: 'piedra', jugada2: 'papel', resultado: 'Jugador 2 gana' },
    { jugada1: 'piedra', jugada2: 'piedra', resultado: 'Empate' },
    { jugada1: 'papel', jugada2: 'papel', resultado: 'Empate' },
    { jugada1: 'tijera', jugada2: 'tijera', resultado: 'Empate' },
  ];

  let resultado = 'Error';

  for (const regla of reglas) {
    if (regla.jugada1 === jugadaJugador1 && regla.jugada2 === jugadaJugador2) {
      resultado = regla.resultado;
      break;
    }
  }

  mensajeResultado.textContent = resultado;
}

// Función para reiniciar el juego
function reiniciarJuego() {
  jugadaJugador1 = null;
  jugadaJugador2 = null;
  jugador1.classList.add('seleccionable');
  jugador2.classList.add('seleccionable');
  jugador1.textContent = 'Jugador 1';
  jugador2.textContent = 'Jugador 2';
  reiniciarBtn.classList.add('oculto');
  mensajeResultado.textContent = '';
}

// Event listeners
jugador1.addEventListener('click', () => seleccionarJugador('jugador1'));
jugador2.addEventListener('click', () => seleccionarJugador('jugador2'));
reiniciarBtn.addEventListener('click', reiniciarJuego);
