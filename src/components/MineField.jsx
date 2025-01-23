import Mine from "./Mine";
import "./MineField.css";

const MineField = ({ numberOfMines }) => {

    // render Mines component for numberOfMines times
    // React doesn't allow to return for loop so make an array of mines
    const arrayOfMines = [];
    for (let i = 0; i < numberOfMines ** 2; i++){
        arrayOfMines.push('mine' + i);
    }
    
    return (
        <div id='mineField'
        style={{
            gridTemplateRows: `repeat(${numberOfMines}, 40px)`,
            gridTemplateColumns: `repeat(${numberOfMines}, 40px)`
        }}>
        {
            arrayOfMines.map((mine, i) => (
                <Mine key={i}/>
            ))
        }
        </div>
    )
};

export default MineField;
