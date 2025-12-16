import React from "react";

function LightSwitch({ isLightOn, toggleLight }) {
    return(
        <button
        className="btn btn-primary mt-3"
        onClick={toggleLight}>
            {isLightOn ? "TURN OFF" : "TURN ON"}
        </button>
    );
}
export default LightSwitch;