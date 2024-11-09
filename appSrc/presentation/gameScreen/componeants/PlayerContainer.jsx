import React from 'react'

function PlayerContainer({player}){
    //get background color
    const color = (player.name[player.name.length-1] != "1") ? "cadetblue" : "blanchedalmond";

  return (
    <section className="player" style={{backgroundColor: color}}>
        <div className="mainScore">
            <h1>{player.name}</h1>
            <h1>{player.score}</h1>
        </div>
        <div className="turnScoreContainer">
            <h3>Current</h3>
            <h1>{player.currentVal}</h1>
        </div>
    </section>
  )
}

export default PlayerContainer
