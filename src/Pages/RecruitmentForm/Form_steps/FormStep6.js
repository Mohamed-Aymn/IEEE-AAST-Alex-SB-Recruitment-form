import React, { useContext, useEffect } from "react";
import FormDataContext from "../context/formContext";
import { stepSix } from "../../../data/step6Data";
import MainStepper from "../components/MainStepper";
import { useForm } from "react-hook-form";
import SubmitPopup from "../popups/SubmitPopup";
import { flushSync } from "react-dom";

function FormStep6() {
    let {
        formItems,
        step,
        data,
        conditionalFields,
        changeHiddenFieldsData,
        changeConditionalFieldsBoleanValue,
    } = useContext(FormDataContext);

    useEffect(() => {
        setTimeout(() => {
            changeHiddenFieldsData("volunteersName");
        }, 0);
        setTimeout(() => {
            changeHiddenFieldsData("friendName");
        }, 1);

        setTimeout(() => {
            changeHiddenFieldsData("other");
        }, 2);
    }, [
        conditionalFields.volunteersName,
        conditionalFields.friendName,
        conditionalFields.other,
    ]);
    useEffect(() => {
        setTimeout(() => {
            changeConditionalFieldsBoleanValue("volunteersName");
        }, 0);
        setTimeout(() => {
            changeConditionalFieldsBoleanValue("friendName");
        }, 1);
        setTimeout(() => {
            changeConditionalFieldsBoleanValue("other");
        }, 2);
    }, [data]);

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
