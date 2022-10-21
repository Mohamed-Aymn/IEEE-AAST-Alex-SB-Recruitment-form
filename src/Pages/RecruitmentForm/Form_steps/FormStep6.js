import React, { useContext, useEffect } from "react";
import FormDataContext from "../context/formContext";
import { stepSix } from "../../../data/step6Data";
import MainStepper from "../components/MainStepper";
import { useForm } from "react-hook-form";
import SubmitPopup from "../popups/SubmitPopup";

function FormStep6() {
    let { inputsUiRendering, step, data, setData, conditionalFields } =
        useContext(FormDataContext);

    let {
        register,
        unregister,
        control,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({
        mode: "onChange",
        defaultValues: data,
    });

    useEffect(() => {
        if (!conditionalFields.friendName) {
            unregister("friendName", { keepDirty: false });
        } else if (!conditionalFields.volunteersName) {
            unregister("volunteersName", { keepDirty: false });
        } else if (!conditionalFields.other) {
            unregister("other", { keepDirty: false });
        }
    }, [unregister, data.howDidYouKnowAboutRecruitment]);

    return (
        <form>
            <div className="stepsIndication">Step {step} of 6</div>
            <h1 className="stepTitle">Experience in each committee</h1>
            {inputsUiRendering(stepSix, register, control, errors)}
            <MainStepper handleSubmit={handleSubmit} isValid={isValid} />
            <SubmitPopup handleSubmit={handleSubmit} />
        </form>
    );
}

export default FormStep6;
