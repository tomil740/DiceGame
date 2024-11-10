import getDiceValues from "../../domain/useCase/getDiceValues";
class gameVm{
    #targetScore;
    #uiState;

    #setUitState;

    constructor(initUiState,setUiState){
        this.#setUitState = setUiState;
        this.#uiState = initUiState;
        this.#targetScore = 100;
    }

    /*
        onRoll will apply the matched action according to the matched user turn on our data + ui
        * pull random dice value 
        * update the matched player values
        * sync the updates to our UI state 
    */
    onRoll(){
        //get random dice values
        const diceValues = getDiceValues(1,7);
        const playerObj = (this.#uiState.isP1Turn) ? this.#uiState.player1 : this.#uiState.player2;
        const sum = (diceValues[2] != 0 ) ? (playerObj.currentVal+diceValues[2]) : 0;
        const updatedPlayer = {...playerObj,currentVal:sum};
       
        this.#uiState = (this.#uiState.isP1Turn) ?
        {...this.#uiState, player1: updatedPlayer,dice1 : diceValues[0],dice2 : diceValues[1]} 
        :
        {...this.#uiState, player2: updatedPlayer,dice1 : diceValues[0],dice2 : diceValues[1]}
        this.#setUitState (this.#uiState);
        

    }
    /*
        onHold will apply the matched action according to the matched user turn on our data + ui
        * update the matched player values,according to the current values
        * check for finish event
        * sync the updates to our UI state 
    */
   onHold(){
        const playerObj = (this.#uiState.isP1Turn) ? this.#uiState.player1 : this.#uiState.player2;
        const sum = playerObj.score + playerObj.currentVal;
        const updatedPlayer = {...playerObj,currentVal:0,score:sum};
        //is fineshed:
        this.#uiState = (this.#uiState.isP1Turn) ?
        {...this.#uiState, player1: updatedPlayer , isP1Turn : (!this.#uiState.isP1Turn)} 
        :
        {...this.#uiState, player2: updatedPlayer, isP1Turn : (!this.#uiState.isP1Turn)}

        this.#isFinished();
   }

   /*
    isFinished will check accoridng to the ui state if the game is Finished if it is
    we will update the ui accordingly with our ending dialog
   */
   #isFinished(){
    if(this.#uiState.player1.score >= this.#targetScore || this.#uiState.player2.score >= this.#targetScore){
        //finished game dialog
        console.log("game fineshed!");
    }

    this.#setUitState (this.#uiState);


   }
}

export default gameVm;