import React from 'react'

function EntryDialog(onStartGame){
  return (
    <article className="entryDialog">
        <p className="instructionsSection">
            ralflorn
        </p>
        <section className="menuSec">
            <h1>Enter target score:</h1>
            <input type="number"/>
            <button onClick={()=>onStartGame}>Start game</button>
        </section>
    </article>
  )
}

export default EntryDialog
