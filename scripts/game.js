function startGame(){
    if(players[0].name === '' || players[1].name === ''){
        alert('Please set custom player for both players');
        return;
    }
    gameArea.style.display = 'block';

}
