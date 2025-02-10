import { useMemo } from "react";
import Mine from "./Mine";
import "./MineField.css";

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
};

const isExplosive = () => {
    return getRandomInt(5) === 1;
};

const MineField = ({ numberOfMines, addScore, isGameOver, setIsGameOver }) => {
    // only when the numberOfMines is changed, return new arrayOfMines
    const field = useMemo(() => {
        const arrayOfMines = [];
        for (let i = 0; i < numberOfMines ** 2; i++) {
            arrayOfMines.push({ explosive: isExplosive() });
        }
        return arrayOfMines;
    }, [numberOfMines]);

    return (
        <>
            <div
                id="mineField"
                style={{
                    gridTemplateRows: `repeat(${numberOfMines}, 40px)`,
                    gridTemplateColumns: `repeat(${numberOfMines}, 40px)`
                }}
            >
                {field.map((mine, i) => (
                    <Mine
                        key={i}
                        isExplosive={mine.explosive}
                        addScore={addScore}
                        isGameOver={isGameOver}
                        setIsGameOver={setIsGameOver}
                    />
                ))}
            </div>
            {isGameOver && <div className="gameOver">Game Over!</div>}
        </>
    );
};

export default MineField;
