import React from 'react'

function GameControll({onRoll,onHold,onNewGame,dice1,dice2}){
  const img1 = `../../../../assets/dice-${dice1}.png`;
  const img2 = `../../../../assets/dice-${dice2}.png`;
  return (
    <section className="gameControl">
        <div onClick={onNewGame} className="buttonContainer">
            <img src='../../../../assets/dice-cube.png' />
            <button>New game</button>
        </div>
        <img src={img1}/>
        <img src={img2}/>
        <div onClick={onRoll} className="buttonContainer">
            <img src='../../../../assets/dice-cube.png' />
            <button>Roll dice</button>
        </div>
        <div onClick={onHold} className="buttonContainer">
            <img src='../../../../assets/dice-cube.png' />
            <button>Hold</button>
        </div>
    </section>
  )
}

export default GameControll
