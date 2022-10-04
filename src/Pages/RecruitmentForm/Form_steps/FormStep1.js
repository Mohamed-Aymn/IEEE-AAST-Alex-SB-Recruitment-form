import React, { useContext, useEffect } from "react";
import FormDataContext from "../context/formContext";
import {
    stepOnePartOne,
    stepOnePartThree,
    stepOnePartTwo,
} from "../../../data/step1Data";
import MainStepper from "../components/MainStepper";
import { useForm } from "react-hook-form";

function FormStep1() {
    let {
        data,
        formItems,
        step,
        changeConditionalFieldsBoleanValue,
        changeHiddenFieldsData,
        conditionalFields,
    } = useContext(FormDataContext);

    useEffect(() => {
        setTimeout(() => {
            changeHiddenFieldsData("primaryCommittee");
        }, 0);
        setTimeout(() => {
            changeHiddenFieldsData("secondaryCommitee1");
        }, 1);
        setTimeout(() => {
            changeHiddenFieldsData("secondaryCommittee2");
        }, 2);
    }, [
        conditionalFields.primaryCommittee,
        conditionalFields.secondaryCommittee2,
        conditionalFields.secondaryCommitee1,
    ]);

    useEffect(() => {
        setTimeout(() => {
            changeConditionalFieldsBoleanValue("primaryCommittee");
        }, 0);
        setTimeout(() => {
            changeConditionalFieldsBoleanValue("secondaryCommitee1");
        }, 1);
        setTimeout(() => {
            changeConditionalFieldsBoleanValue("secondaryCommittee2");
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
            <h1 className="stepTitle">Introduce yourself</h1>

            <div className="twoInputColumns">
                <div className="column">
                    {formItems(stepOnePartOne, register, control, errors)}
                </div>
                <div className="column">
                    {formItems(stepOnePartTwo, register, control, errors)}
                </div>
            </div>
            <div className="partThreeContainer">
                {formItems(stepOnePartThree, register, control, errors)}
            </div>

            <MainStepper handleSubmit={handleSubmit} isValid={isValid} />
        </form>
    );
}

export default FormStep1;
