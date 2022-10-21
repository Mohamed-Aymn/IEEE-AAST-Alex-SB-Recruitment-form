import React from "react";
import { ImCross } from "react-icons/im";
import { FaExclamation } from "react-icons/fa";

function ValidationErrorMessage({ errors, item }) {
    let errorMessageType = () => {
        if (errors[item.stateName].message === "This field is required") {
            return (
                <>
                    <FaExclamation className="errorMsgIcon" fill="#fbbebe" />
                    {errors[item.stateName].message}
                </>
            );
        } else {
            return (
                <>
                    <ImCross className="errorMsgIcon" fill="#fbbebe" />
                    {errors[item.stateName].message}
                </>
            );
        }
    };

    return (
        <>
            {errors[item.stateName] && (
                <span className="validationErrorMessage">
                    {errorMessageType()}
                </span>
            )}
        </>
    );
}

export default ValidationErrorMessage;
