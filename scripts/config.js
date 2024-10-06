// config.js
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
