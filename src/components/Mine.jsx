import { useState } from "react";
import "./Mine.css";

const Mine = ({ isExplosive, addScore, isGameOver, setIsGameOver }) => {
    const [clicked, setClicked] = useState(false);

    const clickHandler = () => {
        setClicked(true);
        if (!isExplosive) {
            console.log("add score");
            addScore();
        } else if (isExplosive) {
            setIsGameOver(true);
            return;
        }
    };

    const backGroundColor = () => {
        if (clicked && !isExplosive) {
            return "green";
        } else if (clicked && isExplosive) {
            return "red";
        }
    };

    return (
        <>
            <button
                style={{ backgroundColor: backGroundColor() }}
                onClick={clickHandler}
                disabled={clicked || isGameOver}
            >
                ?
            </button>
        </>
    );
};

export default Mine;
