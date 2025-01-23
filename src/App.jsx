import Input from "./components/Input";
import { useState } from "react";

import "./App.css";
import CurrentScore from "./components/CurrentScore";
import Title from "./components/Title";
import MineField from "./components/MineField";
import Mine from "./components/Mine";

const App = () => {
    const [gameOver, setGameOver] = useState(false);
    const [numberOfMines, setNumberOfMines] = useState(0);

    return (
        <>
            <Title title={"Minesweeper"} />
            <Input
                numberOfMines={numberOfMines}
                changeHandler={setNumberOfMines}
            />
            <CurrentScore score={0} />
            <MineField numberOfMines={numberOfMines} />
        </>
    );
};

export default App;
