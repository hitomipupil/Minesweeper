import './Input.css'

const Input = ({ numberOfMines, onWow }) => {
  return (
    <>
    <div>input number:</div>
    <input value={numberOfMines} onChange={(event)=>{onWow(event.target.value)}}></input>
    </>
  )
}

export default Input