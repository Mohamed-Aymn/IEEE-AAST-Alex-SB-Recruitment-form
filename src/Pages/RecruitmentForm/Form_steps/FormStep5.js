import React, { useContext } from "react";
import FormDataContext from "../context/formContext";
import { stepFive } from "../../../data/step5Data";
import MainStepper from "../components/MainStepper";
import { useForm } from "react-hook-form";

function FormStep5() {
    let { formItems, data, step, setStep } = useContext(FormDataContext);
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
        <form onSubmit={handleSubmit(() => setStep(step + 1))}>
            <div className="stepsIndication">Step {step} of 6</div>

            <h1 className="stepTitle">Experience in each committee</h1>
            {formItems(stepFive, register, control, errors)}
            <MainStepper handleSubmit={handleSubmit} isValid={isValid} />
        </form>
    );
}

export default FormStep5;
