import React, { useContext } from "react";
import FormDataContext from "../context/formContext";

function MainStepper({ handleSubmit }) {
    let { step, setStep, setSubmitPopup, setStepSwitchErrorPopup } =
        useContext(FormDataContext);

    let onValid = () => {
        setStep(step + 1);
    };

    let onError = () => {
        setStepSwitchErrorPopup(true);
    };

    let onSubmit = () => {
        setSubmitPopup(true);
    };

    let nextButton = () => {
        return (
            <button
                className="primaryButton"
                onClick={handleSubmit(onValid, onError)}
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
                onClick={handleSubmit(onSubmit, onError)}
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
