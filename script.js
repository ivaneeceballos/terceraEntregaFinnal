$(document).ready(function() {
    const jugador1 = $('#jugador1');
    const jugador2 = $('#jugador2');
    const opciones = $('#opciones');
    const mensajeResultado = $('#mensaje');
    const reiniciarBtn = $('#reiniciar');
  
    let jugadaJugador1 = null;
    let jugadaJugador2 = null;
  
    jugador1.click(function() {
      seleccionarJugador('jugador1');
    });
  
    jugador2.click(function() {
      seleccionarJugador('jugador2');
    });
  
    reiniciarBtn.click(reiniciarJuego);
  
    function seleccionarJugador(jugador) {
      opciones.removeClass('oculto');
      jugador1.removeClass('seleccionado');
      jugador2.removeClass('seleccionado');
  
      if (jugador === 'jugador1') {
        jugador1.addClass('seleccionado');
        Swal.fire({
          title: 'Jugador 1',
          text: 'Elige: piedra, papel o tijera',
          input: 'text',
          showCancelButton: true,
          confirmButtonText: 'Aceptar',
          cancelButtonText: 'Cancelar'
        }).then((result) => {
          if (result.isConfirmed) {
            jugadaJugador1 = result.value;
            jugador1.text(`Jugador 1: ${jugadaJugador1}`);
            jugador2.addClass('seleccionado');
            Swal.fire({
              title: 'Jugador 2',
              text: 'Elige: piedra, papel o tijera',
              input: 'text',
              showCancelButton: true,
              confirmButtonText: 'Aceptar',
              cancelButtonText: 'Cancelar'
            }).then((result) => {
              if (result.isConfirmed) {
                jugadaJugador2 = result.value;
                jugador2.text(`Jugador 2: ${jugadaJugador2}`);
                opciones.addClass('oculto');
                reiniciarBtn.removeClass('oculto');
                determinarResultado();
              }
            });
          }
        });
      }
    }
  
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
  
      mensajeResultado.text(resultado);
    }
  
    function reiniciarJuego() {
      jugadaJugador1 = null;
      jugadaJugador2 = null;
      jugador1.addClass('seleccionable').removeClass('seleccionado');
      jugador2.addClass('seleccionable').removeClass('seleccionado');
      jugador1.text('Jugador 1');
      jugador2.text('Jugador 2');
      reiniciarBtn.addClass('oculto');
      mensajeResultado.text('');
    }
  });
  