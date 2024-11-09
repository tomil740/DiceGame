import React from 'react'

const GameControll = () => {
  return (
    <section className="gameControl">
        <div className="buttonContainer">
            <img src='../../../../assets/dice-cube.png' />
            <button>New game</button>
        </div>
        <img src="../../../../assets/dice-1.png"/>
        <img src="../../../../assets/dice-2.png"/>
        <div className="buttonContainer">
            <img src='../../../../assets/dice-cube.png' />
            <button>Roll dice</button>
        </div>
        <div className="buttonContainer">
            <img src='../../../../assets/dice-cube.png' />
            <button>Hold</button>
        </div>
    </section>
  )
}

export default GameControll
