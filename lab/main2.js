function lanzarDado(player) {

  const resultado = Math.floor(Math.random() * 6) + 1;


  document.getElementById(`resultado${player}`).textContent = resultado;

  if (document.getElementById('resultadoPlayer1').textContent !== '-' &&
      document.getElementById('resultadoPlayer2').textContent !== '-') {
    const resultadoPlayer1 = parseInt(document.getElementById('resultadoPlayer1').textContent);
    const resultadoPlayer2 = parseInt(document.getElementById('resultadoPlayer2').textContent);

    let mensajeGanador = '';
    if (resultadoPlayer1 > resultadoPlayer2) {
      mensajeGanador = '¡PLAYER1 ha ganado!';
    } else if (resultadoPlayer2 > resultadoPlayer1) {
      mensajeGanador = '¡PLAYER2 ha ganado!';
    } else {
      mensajeGanador = '¡Ha habido un empate!';
    }

    document.getElementById('mensajeGanador').textContent = mensajeGanador;
  }
}
