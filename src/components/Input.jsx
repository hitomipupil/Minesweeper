import "./Input.css";

const Input = ({ numberOfMines, changeHandler }) => {
    return (
        <>
            <div>input number:</div>
            <input
                type="number"
                placeholder="input a number"
                value={numberOfMines}
                onChange={changeHandler}
            />
        </>
    );
};

export default Input;
