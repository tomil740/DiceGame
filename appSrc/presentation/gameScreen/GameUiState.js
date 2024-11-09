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
        this.dice1 = {num:0,imgUrl:""};
        this.dice2 = {num:0,imgUrl:""};
    }
}

export default GameUiState;