function openPlayerConfig(){
    playerConfigOverlay.style.display ='block';
    backdrop.style.display ='block';

}

function closePlayerConfig(){
    playerConfigOverlay.style.display = 'none';
    backdrop.style.display = 'none';
    formElement.firstElementChild.classList.remove('error');
    errorOutput.textContent= '';
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

}
