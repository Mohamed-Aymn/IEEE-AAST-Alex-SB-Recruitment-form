import React, { useContext } from "react";
import FormDataContext from "../context/formContext";

function MainStepper({ handleSubmit, isValid }) {
    let { step, setStep, setSubmitPopup, setStepSwitchErrorPopup } =
        useContext(FormDataContext);

    let nextButton = () => {
        return (
            <button
                className="primaryButton"
                onClick={
                    isValid
                        ? handleSubmit(() => {
                              setStep(step + 1);
                          })
                        : (e) => {
                              e.preventDefault();
                              setStepSwitchErrorPopup(true);
                          }
                }
            >
                Next Step
            </button>
        );
    };

    let backButton = () => {
        return (
            <button
                onClick={() => setStep(step - 1)}
                className="secondaryButton"
            >
                Back
            </button>
        );
    };

    let submitButton = () => {
        return (
            <button
                onClick={
                    isValid
                        ? (e) => {
                              e.preventDefault();
                              setSubmitPopup(true);
                          }
                        : (e) => {
                              e.preventDefault();
                              setStepSwitchErrorPopup(true);
                          }
                }
                className="primaryButton"
            >
                Submit
            </button>
        );
    };

    let sutibleStepButtons = () => {
        if (step === 1) {
            return <div className="text-right">{nextButton()}</div>;
        } else if (step === 6) {
            return (
                <>
                    <div>{backButton()}</div>
                    <div>{submitButton()}</div>
                </>
            );
        } else {
            return (
                <>
                    <div>{backButton()}</div>
                    <div>{nextButton()}</div>
                </>
            );
        }
    };

    return (
        <div className="mainStepperButtonsContainer">
            {sutibleStepButtons()}
        </div>
    );
}

export default MainStepper;
