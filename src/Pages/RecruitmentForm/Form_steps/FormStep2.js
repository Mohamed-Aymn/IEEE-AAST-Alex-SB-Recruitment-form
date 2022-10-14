import React, { useContext, useEffect } from "react";
import FormDataContext from "../context/formContext";
import { stepTwo } from "../../../data/step2Data";
import MainStepper from "../components/MainStepper";
import { useForm } from "react-hook-form";

function FormStep2() {
    let {
        inputsUiRendering,
        step,
        setStep,
        data,
        conditionalFields,
        changeConditionalFieldsBoleanValue,
        changeHiddenFieldsData,
    } = useContext(FormDataContext);

    useEffect(() => {
        changeHiddenFieldsData("eventNames");
    }, [conditionalFields.eventNames]);

    let {
        register,
        control,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({
        mode: "onChange",
        defaultValues: data,
    });

    useEffect(() => {
        changeConditionalFieldsBoleanValue("eventNames");
    }, [data]);

    return (
        <form onSubmit={handleSubmit(() => setStep(step + 1))}>
            <div className="stepsIndication">Step {step} of 6</div>
            <h1 className="stepTitle">Knowledge about IEEE</h1>
            {inputsUiRendering(stepTwo, register, control, errors)}
            <MainStepper handleSubmit={handleSubmit} isValid={isValid} />
        </form>
    );
}

export default FormStep2;
