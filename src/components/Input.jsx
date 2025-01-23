import "./Input.css";

const Input = ({ numberOfMines, changeHandler }) => {
    return (
        <>
            <div>input number:</div>
            <input
                // type="number"
                value={numberOfMines}
                onChange={(event) => {
                  const numericValue = Number(event.target.value);
                  if (isNaN(numericValue)) {
                      return;
                  }
                  changeHandler(event.target.value);
                }}
            />
        </>
    );
};

export default Input;
