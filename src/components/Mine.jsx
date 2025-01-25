import "./Mine.css";

const Mine = ({ isExplosive }) => {
    // when clicked, set the mine status to clicked
    // if it's explosive, set the mine status to isExplosive
    // if it is not explosive, increase score by one
    return (
        <>
            <button onClick={() => isExplosive && console.log("explosive")}>
                ?
            </button>
        </>
    );
};

export default Mine;
