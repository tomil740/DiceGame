import React from 'react'
import { useState } from 'react';
import GameVm from '../gameVm';
import Player from '../../../domain/models/Player';
import GameUiState from '../GameUiState';
import GameControll from './GameControll';
import PlayerContainer from './PlayerContainer';

function GameContainer(){
    const initPlayer1 = new Player("player1");
    const initPlayer2 = new Player("player2");    
    const initUiState = new GameUiState(initPlayer1,initPlayer2);
  //vm object will be initalize with the life cycle of the screen(main screen jsx function)
  //* will get as a constrcuter argument the allreday initalized state set callback function
  const [gameUiState,setgameUiState] = useState(initUiState); 
  //to make sure it will not be reInitalized thorugh renders I will currently use a state to initalize it
  const gameVm = useState(new GameVm(gameUiState,setgameUiState))[0];    

  return (
    <article className="gameConainer">
        <GameControll/>
        <PlayerContainer player={gameUiState.player1}/>
        <PlayerContainer player={gameUiState.player2}/>
    </article>
  )
}
export default GameContainer;


