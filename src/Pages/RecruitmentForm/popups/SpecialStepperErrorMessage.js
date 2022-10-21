import React, { useContext, useEffect } from "react";
import FormDataContext from "../context/formContext";
import { BsExclamationTriangle } from "react-icons/bs";

function SpecialStepperErrorMessage() {
    let { specialStepperErrorMessage, setSpecialStepperErrorMessage } =
        useContext(FormDataContext);

    useEffect(() => {
        if (specialStepperErrorMessage) {
            setTimeout(() => {
                setSpecialStepperErrorMessage(false);
            }, 5000);
        }
    }, [specialStepperErrorMessage]);

    return (
        <>
            {specialStepperErrorMessage && (
                <div className="messageContainer">
                    <div className="message">
                        <div className="messageContent">
                            <BsExclamationTriangle
                                className="messageIcon"
                                fill="#3992ff"
                            />
                            please navigate between steps by next/back
                            naviagtion buttons at the bottom of the page
                        </div>
                        <div className="buttonConatiner">
                            <button
                                className="primaryButton"
                                onClick={() =>
                                    setSpecialStepperErrorMessage(false)
                                }
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

export default SpecialStepperErrorMessage;
