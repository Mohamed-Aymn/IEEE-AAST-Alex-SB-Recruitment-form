import React, { useContext } from "react";
import FormDataContext from "../context/formContext";
import { stepSix } from "../../../data/step6Data";
import MainStepper from "../components/MainStepper";
import { useForm } from "react-hook-form";
import SubmitPopup from "../popups/SubmitPopup";

function FormStep6() {
    let { formItems, step, data } = useContext(FormDataContext);

    let {
        register,
        control,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({
        mode: "onChange",
        defaultValues: data,
    });

    return (
        <form>
            <div className="stepsIndication">Step {step} of 6</div>
            <h1 className="stepTitle">Experience in each committee</h1>
            {formItems(stepSix, register, control, errors)}
            <MainStepper isValid={isValid} />
            <SubmitPopup handleSubmit={handleSubmit} />
        </form>
    );
}

export default FormStep6;
