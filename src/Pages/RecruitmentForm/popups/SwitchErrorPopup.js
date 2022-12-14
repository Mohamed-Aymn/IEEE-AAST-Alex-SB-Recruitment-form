import React, { useContext, useEffect } from "react";
import FormDataContext from "../context/formContext";
import { BsExclamationTriangle } from "react-icons/bs";

function SwitchErrorPopup() {
    let { stepSwitchErrorPopup, setStepSwitchErrorPopup } =
        useContext(FormDataContext);

    useEffect(() => {
        if (stepSwitchErrorPopup) {
            setTimeout(() => {
                setStepSwitchErrorPopup(false);
            }, 5000);
        }
    }, [stepSwitchErrorPopup]);

    return (
        <>
            {stepSwitchErrorPopup && (
                <div className="messageContainer">
                    <div className="message">
                        <div className="messageContent">
                            <BsExclamationTriangle
                                className="messageIcon"
                                fill="#3992ff"
                            />
                            You can't switch to the next step until you finish
                            filling the current step
                        </div>
                        <div className="buttonConatiner">
                            <button
                                className="primaryButton"
                                onClick={() => setStepSwitchErrorPopup(false)}
                            >
                                ok
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default SwitchErrorPopup;
