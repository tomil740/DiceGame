class Player{
    name;
    score; 
    currentVal;
    finishLine;

    constructor(name){
        this.name = name;
        this.score = 0;
        this.currentVal = 0;
        this.finishLine = "";
    }
}

export default Player;