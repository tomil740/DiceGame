import React from 'react'

function PlayerContainer({player,yourTurn}){
    //get background color
    const color = yourTurn ? ["#7f4d7b","#ffd6f7","#ffffff"] : ["#ffd6f7","#6d5869","#261625"];
    if(player.finishLine == "You win!"){
      color[0] = "#330833";
      color[1] = "#ffd6f7";
      color[2] = "#ffffff";
    }
  return ( 
    <section className="player" style={{backgroundColor: color[0], color:color[1]}}>
        <div className="mainScore">
            <h1>{player.name}</h1>
            <h1 style={{fontSize:"56px", fontWeight:"800",color:color[2]}}>{player.score}</h1>
        </div>
        <div className="turnScoreContainer">
            <h2 className="finishLine">{player.finishLine}</h2>
            <h3>Current</h3>
            <h1>{player.currentVal}</h1>
        </div>
    </section>
  )
}

export default PlayerContainer
