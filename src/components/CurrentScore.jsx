import PropTypes from "prop-types";
import { useState } from "react";

import "./CurrentScore.css";

const CurrentScore = ({}) => {
    const [score, setScore] = useState(0);
    return <div>CurrentScore: {score}</div>;
};

CurrentScore.propTypes = {
    score: PropTypes.number.isRequired
};

export default CurrentScore;
