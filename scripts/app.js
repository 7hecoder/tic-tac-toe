const playerConfigOverlay = document.getElementById('config-overlay');
const backdrop = document.getElementById('backdrop');
const formElement = document.querySelector('form');

const editPlayer1 = document.getElementById('edit-player1');
const editPlayer2 = document.getElementById('edit-player1');
const cancelConfig = document.getElementById('cancel-config');

editPlayer1.addEventListener('click', openPlayerConfig);
editPlayer2.addEventListener('click', openPlayerConfig);

cancelConfig.addEventListener('click', closePlayerConfig);
backdrop.addEventListener('click', closePlayerConfig)

formElement.addEventListener('submit', savePlayer);
