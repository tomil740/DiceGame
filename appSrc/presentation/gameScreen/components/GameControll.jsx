import GameBut from "./subCompents/GameBut";

function GameControll({onRoll,onHold,onNewGame,dice1,dice2}){
  const img1 = `../../../../assets/dice-${dice1}.png`;
  const img2 = `../../../../assets/dice-${dice2}.png`;
  return (
    <section className="gameControl">
        <GameBut name = {"New game"} callBackFun = {onNewGame} />
        <img src={img1}/>
        <img src={img2}/>
        <GameBut name = {"Roll dice"} callBackFun = {onRoll} />
        <GameBut name = {"Hold"} callBackFun = {onHold} />
    </section>
  )
}

export default GameControll
