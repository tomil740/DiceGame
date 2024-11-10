import getDiceValues from "../../domain/useCase/getDiceValues";
import Player from "../../domain/models/Player";
class gameVm{
    #uiState;

    #setUitState;

    constructor(initUiState,setUiState){
        this.#setUitState = setUiState;
        this.#uiState = initUiState;
        //this.#uiState.targetScore = 100;
    }

    onStartGame(targetVal){ 
        if(targetVal > 0){
            const player1 =new Player("player1");
            const player2 =new Player("player2");
            //start new game,with clean data
            this.#uiState = {...this.#uiState,targetScore: targetVal,players:[player1,player2],isP1Turn:true};
            this.#setUitState(this.#uiState);
        }else{
            window.alert("target value isnt valid...");
        }
    }

    /*
        onRoll will apply the matched action according to the matched user turn on our data + ui
        * pull random dice value 
        * update the matched player values
        * sync the updates to our UI state 
    */
    onRoll(){
        if(typeof(this.#uiState.isP1Turn)== "boolean"){
            //get random dice values
            const diceValues = getDiceValues(1,7);
            const playerIndex = (this.#uiState.isP1Turn) ? 0 : 1;
            const sum = (diceValues[2] != 0 ) ? (this.#uiState.players[playerIndex].currentVal+diceValues[2]) : 0;
            const updatePlayers = (this.#uiState.isP1Turn) ? [{...this.#uiState.players[playerIndex],currentVal:sum},this.#uiState.players[1]]
            :[this.#uiState.players[0],{...this.#uiState.players[playerIndex],currentVal:sum}];
            let passTurn = this.#uiState.isP1Turn;
            if(sum == 0){
                passTurn = !passTurn;
            }
            this.#uiState = {...this.#uiState,players:updatePlayers,dice1:diceValues[0],dice2:diceValues[1],isP1Turn:passTurn}
            this.#setUitState (this.#uiState);
        }else{
            window.alert("game is finished,press restart to play again");
        }
    }
    /*
        onHold will apply the matched action according to the matched user turn on our data + ui
        * update the matched player values,according to the current values
        * check for finish event
        * sync the updates to our UI state 
    */
   onHold(){
        if(typeof(this.#uiState.isP1Turn)== "boolean"){
            const playerIndex = (this.#uiState.isP1Turn) ? 0 : 1;
            const sum = this.#uiState.players[playerIndex].score + this.#uiState.players[playerIndex].currentVal;
            const updatePlayers = (this.#uiState.isP1Turn) ? [{...this.#uiState.players[playerIndex],score:sum,currentVal:0},this.#uiState.players[1]]
            :[this.#uiState.players[0],{...this.#uiState.players[playerIndex],score:sum,currentVal:0}];
            //is fineshed:
            this.#uiState = {...this.#uiState,players:updatePlayers,isP1Turn:!(this.#uiState.isP1Turn)};
            this.#isFinished(!this.#uiState.isP1Turn);
        }else{
            window.alert("game is finished,press restart to play again");
        }
   }

   /*
    isFinished will check accoridng to the ui state if the game is Finished if it is
    we will update the ui accordingly with our ending dialog
   */
   #isFinished(isP1Play){
    const playerToCheck = (isP1Play) ? 0 : 1;
    const secondPlayer = (playerToCheck != 0) ? 0 : 1;
    //do we have any finish state 
    if(this.#uiState.players[playerToCheck].score >= this.#uiState.targetScore){
        //finished game dialog
        const sentance1  = "You win!";
        const sentance2 = "below target score";
        const sentance3 = "passed target score";
    
        let player1;
        let player2;
            

        //case 1, the player has been pass the target score
        if(this.#uiState.players[playerToCheck].score > this.#uiState.targetScore){
            player1 = {...this.#uiState.players[playerToCheck],finishLine:sentance3};
            player2 = {...this.#uiState.players[secondPlayer],finishLine:sentance1};

        }else {
            player1 = {...this.#uiState.players[playerToCheck],finishLine:sentance1};
            player2 = {...this.#uiState.players[secondPlayer],finishLine:sentance2};
        }
        this.#uiState = {...this.#uiState,players:[player1,player2],isP1Turn:-1};
        this.#setUitState (this.#uiState);

    }else{
        this.#setUitState (this.#uiState);       
    }
   }

   onNewGame(){
    this.#uiState = {...this.#uiState,targetScore: -1};
    console.log("myState",this.#uiState.targetScore);
    this.#setUitState(this.#uiState);
    console.log("run",this.#uiState.targetScore);
   }
}

export default gameVm;