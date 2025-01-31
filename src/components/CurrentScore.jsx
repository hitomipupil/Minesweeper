import PropTypes from "prop-types";
import { useState } from "react";

import "./CurrentScore.css";

const CurrentScore = ({ score }) => {
    return <div>CurrentScore: {score}</div>;
};

export default CurrentScore;
