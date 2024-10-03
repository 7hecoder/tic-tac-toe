function openPlayerConfig(event){
    editedPlayer = +event.target.dataset.playerid; //+ will convert this line input no number
    playerConfigOverlay.style.display ='block';
    backdrop.style.display ='block';

}

function closePlayerConfig(){
    playerConfigOverlay.style.display = 'none';
    backdrop.style.display = 'none';
    formElement.firstElementChild.classList.remove('error');
    errorOutput.textContent= '';
    formElement.firstElementChild.lastElementChild.value = '';
}

function savePlayer(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredName = formData.get('playername').trim(); //trim to avoid white space and empty string//

    if (!enteredName){
        event.target.firstElementChild.classList.add('error');
        errorOutput.textContent = 'Please enter a valid name!';
        return;
    }

    const UpdatedPlayerData = document.getElementById('player-' editedPlayer + '-data');
    UpdatedPlayerData.children[1].textContent = enteredName;

    players[editedPlayer - 1].name = enteredName;

    closePlayerConfig();

}
