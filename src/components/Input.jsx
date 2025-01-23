import './Input.css'

const Input = ({ numberOfMines, changeHandler }) => {

  return (
    <>
    <div>input number:</div>
    <input type='number' value={numberOfMines} onChange={(event)=>{changeHandler(event.target.value.trim())}} />
    </>
  )
}

export default Input