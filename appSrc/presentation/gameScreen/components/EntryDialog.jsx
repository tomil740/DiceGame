import React, { useState } from 'react'

function EntryDialog({onStartGame}){
    const [targetVal,setTargetVal] = useState(-1);

    function onGameStart(){
        onStartGame(targetVal);
    }

  return (
    <article className="entryDialog">
        <div className="instructionsSection">
          <h3>Rules:</h3>
          <p>
              The game has 2 players, playing in rounds.
              In each turn, a player rolls 2 dice as many times as he
              wishes.
              Each result will get added to his round’s score.
              But if the player rolls a double six all his round’s score
              gets lost.
              After that, it's the next player’s turn.
              A player can choose to ‘Hold’, which means that his
              round’s score gets added to his global score.
              After that, it's the next player's turn.
              The first player to reach 100 points wins.
          </p> 
        </div>
        <section className="menuSec">
            <h1>Enter target score:</h1>
            <input value={targetVal} onChange={(val)=>setTargetVal(val.target.value)} type="number"/>
            <button onClick={onGameStart}>Start game</button>
        </section>
    </article>
  )
}

export default EntryDialog
