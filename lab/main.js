const numeroAleatorio = Math.floor(Math.random() * 20) + 1;
let intentos = 0;
let adivinado = false;

do {
    // Pide al usuario que adivine el número
    const intento = parseInt(prompt("¿Qué número es?"));

    // Incrementa el contador de intentos
    intentos++;

    // Verifica si el número es correcto
    if (intento === numeroAleatorio) {
        adivinado = true;
        alert("¡Felicidades, has acertado!");
    } else {
        alert("Intenta de nuevo.");
    }
} while (!adivinado);

alert("Número de intentos: " + intentos);