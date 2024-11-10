class GameUiState{
    players;
    isP1Turn; 
    dice1;
    dice2;
    

    constructor(player1,player2){
        this.players = [player1,player2];
        this.isP1Turn = true;
        this.dice1 = 1;
        this.dice2 = 2;
    }
}

export default GameUiState;