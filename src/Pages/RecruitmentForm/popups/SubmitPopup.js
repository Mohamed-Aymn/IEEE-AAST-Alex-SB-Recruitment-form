import React, { useContext } from "react";
import FormDataContext from "../context/formContext";

function SubmitPopup({ handleSubmit }) {
    let { submitPopup, setSubmitPopup } = useContext(FormDataContext);

    // console.log(handleSubmit);

    return (
        <div>
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
                                    console.log(data);
                                    setSubmitPopup(false);
                                })}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SubmitPopup;
