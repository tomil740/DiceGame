class gameVm{
    #targetScore;
    #uiState;

    #setUitState;

    constructor(initUiState,setUiState){
        this.#setUitState = setUiState;
        this.#uiState = initUiState;
        this.#targetScore = 100;
    }
}

export default gameVm;