import Input from "./components/Input";
import { useCallback, useEffect, useRef, useState } from "react";

import "./App.css";
import CurrentScore from "./components/CurrentScore";
import Title from "./components/Title";
import MineField from "./components/MineField";

const App = () => {
    const [isGameOver, setIsGameOver] = useState(false);
    const [numberOfMines, setNumberOfMines] = useState("");
    const [score, setScore] = useState(0);

    const checkFirstRender = useRef(true);

    // only when the not explosive button is clicked, it updates the score
    const addScore = useCallback(() => {
        setScore((prevScore) => {
            return (prevScore = prevScore + 1);
        });
    }, [score]);

    const changeHandler = useCallback(
        (e) => {
            isGameOver && setIsGameOver(false);
            setScore(0);
            setNumberOfMines(e.target.value);
        },
        [numberOfMines]
    );

    return (
        <>
            <Title title={"Minesweeper"} />
            <Input
                numberOfMines={numberOfMines}
                changeHandler={changeHandler}
            />
            <CurrentScore score={score} />
            <MineField
                numberOfMines={numberOfMines}
                addScore={addScore}
                isGameOver={isGameOver}
                setIsGameOver={setIsGameOver}
            />
        </>
    );
};

export default App;
