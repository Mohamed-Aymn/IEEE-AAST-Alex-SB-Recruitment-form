import React, { useContext, useEffect } from "react";
import FormDataContext from "../context/formContext";
import { BsExclamationTriangle } from "react-icons/bs";

function SamePageErrorMessage() {
    let { sameStepErrorMessage, setSameStepErrorMessage } =
        useContext(FormDataContext);

    useEffect(() => {
        if (sameStepErrorMessage) {
            setTimeout(() => {
                setSameStepErrorMessage(false);
            }, 5000);
        }
    }, [sameStepErrorMessage]);

    return (
        <>
            {sameStepErrorMessage && (
                <div className="messageContainer">
                    <div className="message">
                        <div className="messageContent">
                            <BsExclamationTriangle
                                className="messageIcon"
                                fill="#3992ff"
                            />
                            You are already in this step!
                        </div>
                        <div className="buttonConatiner">
                            <button
                                className="primaryButton"
                                onClick={() => setSameStepErrorMessage(false)}
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

export default SamePageErrorMessage;
