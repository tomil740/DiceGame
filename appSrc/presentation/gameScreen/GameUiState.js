class GameUiState{
    player1
    player2
    isP1Turn;
    dice1;
    dice2;
    

    constructor(player1,player2){
        this.player1 = player1;
        this.player2 = player2;
        this.isP1Turn = true;
        this.dice1 = 1;
        this.dice2 = 2;
    }
}

export default GameUiState;