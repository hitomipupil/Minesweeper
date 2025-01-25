import PropTypes from "prop-types";
import { useState } from "react";

import "./CurrentScore.css";

const CurrentScore = ({ isCorrect }) => {
    const [score, setScore] = useState(0);

    if (isCorrect) {
        setScore((prevScore) => prevScore++);
    }

    return <div>CurrentScore: {score}</div>;
};

export default CurrentScore;
