import { useCallback, useMemo, useState } from "react";
import "./Mine.css";

const Mine = ({ isExplosive, addScore, isGameOver, setIsGameOver }) => {
    const [clicked, setClicked] = useState(false);

    const clickHandler = useCallback(() => {
        setClicked(true);
        if (!isExplosive) {
            addScore();
        } else if (isExplosive) {
            setIsGameOver(true);
            return;
        }
    }, [clicked]);

    const backGroundColor = useMemo(() => {
        if (clicked && !isExplosive) {
            return "green";
        } else if (clicked && isExplosive) {
            return "red";
        }
    }, [clicked]);

    return (
        <>
            <button
                className="mine"
                style={{ backgroundColor: backGroundColor }}
                onClick={clickHandler}
                disabled={clicked || isGameOver}
            >
                {clicked ? "" : "?"}
            </button>
        </>
    );
};

export default Mine;
