import React from 'react'
import { useState } from 'react';
import GameVm from '../gameVm';
import Player from '../../../domain/models/Player';
import GameUiState from '../GameUiState';
import GameControll from './GameControll';
import PlayerContainer from './PlayerContainer';
import EntryDialog from './EntryDialog';

function GameContainer(){
    const initPlayer1 = new Player("player1");
    const initPlayer2 = new Player("player2");    
    const initUiState = new GameUiState(initPlayer1,initPlayer2);
  //vm object will be initalize with the life cycle of the screen(main screen jsx function)
  //* will get as a constrcuter argument the allreday initalized state set callback function
  const [gameUiState,setgameUiState] = useState(initUiState); 
  //to make sure it will not be reInitalized thorugh renders I will currently use a state to initalize it
  const gameVm = useState(new GameVm(gameUiState,setgameUiState))[0];  
  
   let a = <EntryDialog onStartGame={(a)=>gameVm.onStartGame(a)}/>;
   if(gameUiState.targetScore != -1 && gameUiState.targetScore != undefined){
     a = <article className="gameConainer">
          <GameControll onNewGame = {()=>gameVm.onNewGame()} onHold={()=>gameVm.onHold()} onRoll={()=>gameVm.onRoll()} dice1={gameUiState.dice1} dice2={gameUiState.dice2}/>
          <PlayerContainer player={gameUiState.players[0]} yourTurn={gameUiState.isP1Turn}/>
          <PlayerContainer player={gameUiState.players[1]} yourTurn = {(!gameUiState.isP1Turn)}/>
      </article>
  }else{
    a = <EntryDialog onStartGame={(a)=>gameVm.onStartGame(a)}/>;
  }

  return a;
}
export default GameContainer;


