import PropTypes from "prop-types";
import { useState } from "react";

import "./CurrentScore.css";

const CurrentScore = ({ score }) => {
    return (
        <div className="scoreSection">
            Score: <span className="score">{score}</span>
        </div>
    );
};

export default CurrentScore;
