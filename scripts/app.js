// app.js
const gameData = [
  [0,0,0],
  [0,0,0],
  [0,0,0],
];

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;

const players = [
  {
    name: '',
    symbol: 'X'
  },
  {
    name: '',
    symbol: 'O'
  },
];

const playerConfigOverlay = document.getElementById('config-overlay');
const backdrop = document.getElementById('backdrop');
const formElement = document.querySelector('form');
const errorOutput = document.getElementById('config-error');
const gameArea = document.getElementById('game');
const activePlayerName = document.getElementById('active-player');
const gameOverElement = document.getElementById('game-over');

const editPlayer1 = document.getElementById('edit-player1');
const editPlayer2 = document.getElementById('edit-player2');
const cancelConfig = document.getElementById('cancel-config');
const startNewGame = document.getElementById('start-game-btn');
const gameFields = document.getElementById('game-board');

function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid;
  playerConfigOverlay.style.display = 'block';
  backdrop.style.display = 'block';
}

function closePlayerConfig() {
  playerConfigOverlay.style.display = 'none';
  backdrop.style.display = 'none';
  formElement.firstElementChild.classList.remove('error');
  errorOutput.textContent = '';
  formElement.firstElementChild.lastElementChild.value = '';
}

function savePlayer(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredName = formData.get('playername').trim();

  if (!enteredName) {
    event.target.firstElementChild.classList.add('error');
    errorOutput.textContent = 'Please enter a valid name!';
    return;
  }

  const updatedPlayerData = document.getElementById(`player-${editedPlayer}-data`);
  updatedPlayerData.children[1].textContent = enteredName;

  players[editedPlayer - 1].name = enteredName;

  closePlayerConfig();
}

editPlayer1.addEventListener('click', openPlayerConfig);
editPlayer2.addEventListener('click', openPlayerConfig);

cancelConfig.addEventListener('click', closePlayerConfig);
backdrop.addEventListener('click', closePlayerConfig);

formElement.addEventListener('submit', savePlayer);

startNewGame.addEventListener('click',startGame);

for (const gameField of gameFields.children){
  gameField.addEventListener('click',selectGameField);
}
