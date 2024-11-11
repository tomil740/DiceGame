
const GameBut = ({name,callBackFun}) => {
  return (
    <div onClick={callBackFun} className="buttonContainer">
        <img src='../../../../../assets/dice-cube.png' />
        <button>{name}</button>
    </div>
  )
}

export default GameBut
