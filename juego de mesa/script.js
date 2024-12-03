// script.js
let currentPlayer = 1;
let diceValue = 0;
let playerTurn = document.getElementById("current-player");
let diceResult = document.getElementById("dice-value");
let nextTurnButton = document.getElementById("next-turn");
let message = document.getElementById("message");

// Función para tirar los dados
function rollDice() {
    diceValue = Math.floor(Math.random() * 6) + 1;  // Genera un número entre 1 y 6
    diceResult.textContent = diceValue;  // Muestra el resultado del dado
    nextTurnButton.disabled = false;  // Habilita el botón para pasar al siguiente turno
    message.textContent = "¡Es tu turno de tirar los dados!";
}

// Función para cambiar de turno
function nextTurn() {
    currentPlayer = currentPlayer === 1 ? 2 : 1;  // Alterna entre Jugador 1 y Jugador 2
    playerTurn.textContent = `Jugador ${currentPlayer}`;
    nextTurnButton.disabled = true;
    message.textContent = `Es el turno de Jugador ${currentPlayer}. ¡Tira los dados!`;
}

// Configura los eventos
document.getElementById("roll-dice").addEventListener("click", rollDice);
nextTurnButton.addEventListener("click", nextTurn);
