import Input from "./components/Input";
import { useState } from "react";

import "./App.css";
import CurrentScore from "./components/CurrentScore";
import Title from "./components/Title";
import MineField from "./components/MineField";
import Mine from "./components/Mine";

const App = () => {
    const [gameOver, setgameOver] = useState(false);
    const [numberOfMines, setnumberOfMines] = useState(5);

    return (
    <>
        <Title title={'Minesweeper'}/>
        <Input numberOfMines={numberOfMines} onWow={setnumberOfMines}/>
        <CurrentScore />
        <MineField numberOfMines={numberOfMines}/>
        <Mine />
    </>
    );
}

export default App;
