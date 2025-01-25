import Mine from "./Mine";
import "./MineField.css";

const MineField = ({ numberOfMines }) => {
    const arrayOfMines = [];
    for (let i = 0; i < numberOfMines ** 2; i++) {
        arrayOfMines.push("mine" + i);
    }

    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
    };

    const isExplosive = () => {
        return getRandomInt(5) === 1;
    };

    return (
        <div
            id="mineField"
            style={{
                gridTemplateRows: `repeat(${numberOfMines}, 40px)`,
                gridTemplateColumns: `repeat(${numberOfMines}, 40px)`
            }}
        >
            {arrayOfMines.map((mine, i) => (
                <Mine key={i} isExplosive={isExplosive()} />
            ))}
        </div>
    );
};

export default MineField;
