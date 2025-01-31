import Input from "./components/Input";
import { useCallback, useState } from "react";

import "./App.css";
import CurrentScore from "./components/CurrentScore";
import Title from "./components/Title";
import MineField from "./components/MineField";
import Mine from "./components/Mine";

const App = () => {
    const [isGameOver, setIsGameOver] = useState(false);
    const [numberOfMines, setNumberOfMines] = useState("");
    const [score, setScore] = useState(0);

    // only when the not explosive button is clicked, it updates the score
    const addScore = useCallback(() => {
        setScore((prevScore) => {
            return (prevScore = prevScore + 1);
        });
    }, [score]);

    const changeHandler = (e) => {
      isGameOver && setIsGameOver(false);
      setScore(0);
      setNumberOfMines(e.target.value);
    }

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
