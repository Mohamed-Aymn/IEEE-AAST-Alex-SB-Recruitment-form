import React, { useContext } from "react";
import FormDataContext from "../context/formContext";

function SubmitPopup({ handleSubmit }) {
    let { submitPopup, setSubmitPopup, setFinishPopup } =
        useContext(FormDataContext);

    return (
        <>
            {submitPopup && (
                <div className="popupContainer">
                    <div className="popup">
                        <span>
                            Are you sure do you want to submit form? feel free
                            to revise data first.
                        </span>
                        <div className="popupButtonsContainer">
                            <button
                                className="secondaryButton"
                                onClick={() => {
                                    setSubmitPopup(false);
                                }}
                            >
                                Cancel
                            </button>
                            <button
                                className="primaryButton"
                                onClick={handleSubmit((data) => {
                                    setSubmitPopup(false);
                                    console.log(data);
                                    setFinishPopup(true);
                                })}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default SubmitPopup;
