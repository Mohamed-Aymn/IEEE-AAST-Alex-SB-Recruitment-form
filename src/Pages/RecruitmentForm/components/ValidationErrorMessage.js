import React from "react";

function ValidationErrorMessage({ errors, item }) {
    return (
        <>
            {errors[item.stateName] && (
                <span className="validationErrorMessage">
                    {errors[item.stateName].message}
                </span>
            )}
        </>
    );
}

export default ValidationErrorMessage;
