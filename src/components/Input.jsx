import "./Input.css";

const Input = ({ numberOfMines, changeHandler }) => {
    return (
        <>
            <div className="inputSection">
                <label htmlFor="input">input a number</label>
                <input
                    id="input"
                    type="number"
                    value={numberOfMines}
                    onChange={changeHandler}
                    max="10"
                />
            </div>
        </>
    );
};

export default Input;
