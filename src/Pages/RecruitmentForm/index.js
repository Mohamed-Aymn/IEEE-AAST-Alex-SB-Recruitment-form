import React, { useContext } from "react";
import FormStep1 from "./Form_steps/FormStep1";
import FormStep2 from "./Form_steps/FormStep2";
import FormStep3 from "./Form_steps/FormStep3";
import FormStep4 from "./Form_steps/FormStep4";
import FormStep5 from "./Form_steps/FormStep5";
import FormStep6 from "./Form_steps/FormStep6";
import FormDataContext from "./context/formContext";
import SwitchErrorPopup from "./popups/SwitchErrorPopup";
import SpecialStepper from "./components/SpecialStepper";

function Form() {
    let { step } = useContext(FormDataContext);

    let steps = () => {
        switch (step) {
            case 1:
                return <FormStep1 />;
            case 2:
                return <FormStep2 />;
            case 3:
                return <FormStep3 />;
            case 4:
                return <FormStep4 />;
            case 5:
                return <FormStep5 />;
            case 6:
                return <FormStep6 />;
            default:
                throw new Error();
        }
    };
    return (
        <>
            <SwitchErrorPopup />
            <div className="formTitle">
                <h1>Recruitment</h1>
                <div>Follow the simple 6 steps to complete the form.</div>
            </div>
            <div className="recruitmentContainer">
                <SpecialStepper />
                <div className="steps">{steps()}</div>
            </div>
        </>
    );
}

export default Form;
