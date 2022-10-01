import React, { useContext } from "react";
import FormDataContext from "../context/formContext";

function SwitchErrorPopup() {
    let { stepSwitchErrorPopup, setStepSwitchErrorPopup } =
        useContext(FormDataContext);

    return (
        <div>
            {stepSwitchErrorPopup && (
                <div className="popupContainer">
                    <div className="popup">
                        <span>
                            You can't switch to the next step until you finish
                            filling the current step
                        </span>
                        <button
                            className="primaryButton"
                            onClick={() => setStepSwitchErrorPopup(false)}
                        >
                            ok
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SwitchErrorPopup;
