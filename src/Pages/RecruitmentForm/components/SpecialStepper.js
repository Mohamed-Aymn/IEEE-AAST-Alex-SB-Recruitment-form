import React, { useContext } from "react";
import FormDataContext from "../context/formContext";
import {
    BsFillPersonFill,
    BsStarFill,
    BsFillChatTextFill,
    BsFillPenFill,
    BsUiChecksGrid,
} from "react-icons/bs";
import { SiIeee } from "react-icons/si";
import SmallSpecialStepper from "./SmallSpecialStepper";
import BigSpecialStepper from "./BigSpecialStepper";

function StyledStepper() {
    let {
        step,
        setStep,
        setStepSwitchErrorPopup,
        setSpecialStepperErrorMessage,
        setSameStepErrorMessage,
    } = useContext(FormDataContext);

    let buttonsInfo = [
        { id: 1, name: "Introduce Yourself", icon: BsFillPersonFill },
        { id: 2, name: "Knowledge about IEEE", icon: SiIeee },
        { id: 3, name: "Committee Choice", icon: BsUiChecksGrid },
        { id: 4, name: "Experience in each committee", icon: BsStarFill },
        { id: 5, name: "Sitiuations", icon: BsFillChatTextFill },
        { id: 6, name: "Feedback", icon: BsFillPenFill },
    ];

    let clickHandler = (id) => {
        if (id > step) {
            setStepSwitchErrorPopup(true);
        } else if (id < step) {
            setSpecialStepperErrorMessage(true);
        } else if (id == step) {
            setSameStepErrorMessage(true);
        }
    };

    return (
        <>
            <div className="smallSpecialStepperContainer">
                <SmallSpecialStepper
                    buttonsInfo={buttonsInfo}
                    step={step}
                    setStep={setStep}
                    setStepSwitchErrorPopup={setStepSwitchErrorPopup}
                    clickHandler={clickHandler}
                />
            </div>
            <div className="bigSpecialStepperConatiner">
                <BigSpecialStepper
                    buttonsInfo={buttonsInfo}
                    step={step}
                    setStep={setStep}
                    setStepSwitchErrorPopup={setStepSwitchErrorPopup}
                    clickHandler={clickHandler}
                />
            </div>
        </>
    );
}

export default StyledStepper;
