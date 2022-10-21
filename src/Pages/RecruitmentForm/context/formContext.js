import { createContext, useState } from "react";
import Controller from "../components/Controller";
import InputField from "../Form_input_fileds/InputField";
import DropDown from "../Form_input_fileds/DropDown";
import TextArea from "../Form_input_fileds/TextArea";
import RadioButton from "../Form_input_fileds/RadioButton";
import SpecialRange from "../Form_input_fileds/SpecialRange";
import LimitedCheckBox from "../Form_input_fileds/LimitedCheckBox";
import ValidationErrorMessage from "../components/ValidationErrorMessage";

const FormDataContext = createContext({});

export const FormDataProvider = ({ children }) => {
    let [step, setStep] = useState(1);
    let [data, setData] = useState({
        // first step
        fullName: "",
        address: "",
        phoneNumber: "",
        email: "",
        gpa: "",
        semester: "",
        faculty: "",
        department: "",
        civilWork: "",
        skills: "",
        hobbies: "",
        describeYourself: "",
        achievemenets: "",
        // second step
        ieeeLettersAbv: "",
        whatDoYouKnowAboutIeee: "",
        whyDoYouWantToJoinIEEE: "",
        didAttendEvents: "",
        eventNames: "",
        // third step
        primaryCommittee: "",
        secondaryCommitee1: "",
        firstNonTechnicalSecondaryCommittee: "",
        secondNonTechnicalSecondaryCommittee: "",
        // fourth step
        ITExperience: "",
        technicalExperience: "",
        mediaExperience: "",
        documentationExperience: "",
        registrationExperience: "",
        operationExperience: "",
        // fifth step
        commitmentHours: "",
        ratherBeYourOwnBoss: "",
        setsYouApartFromCandidates: "",
        // sixth step
        howDidYouKnowAboutRecruitment: "",
        volunteersName: "",
        friendName: "",
        other: "",
    });
    let [stepSwitchErrorPopup, setStepSwitchErrorPopup] = useState(false);
    let [submitPopup, setSubmitPopup] = useState(false);
    let [specialStepperErrorMessage, setSpecialStepperErrorMessage] =
        useState(false);
    let [sameStepErrorMessage, setSameStepErrorMessage] = useState(false);
    let [finishPopup, setFinishPopup] = useState(false);

    let conditionalFields = {
        eventNames: data.didAttendEvents === "Yes",
        primaryCommittee:
            data.faculty === "Faculty Of Computer and Information Technology" ||
            data.faculty === "Faculty Of Engineering",
        secondaryCommitee1:
            data.faculty == "Faculty Of Computer and Information Technology" ||
            data.faculty == "Faculty Of Engineering",
        firstNonTechnicalSecondaryCommittee:
            data.faculty !== "Faculty Of Computer and Information Technology" &&
            data.faculty !== "Faculty Of Engineering",
        secondNonTechnicalSecondaryCommittee:
            data.faculty !== "Faculty Of Computer and Information Technology" &&
            data.faculty !== "Faculty Of Engineering",
        volunteersName: data.howDidYouKnowAboutRecruitment == "Volunteer",
        friendName: data.howDidYouKnowAboutRecruitment == "Friend",
        other: data.howDidYouKnowAboutRecruitment == "Other",
    };

    let inputsUiRendering = (arrayOfFormItems, register, control, errors) => {
        return (
            <>
                {arrayOfFormItems.map((item, i) => {
                    /////////////////////////////////////////////////// Text
                    if (item.type === "text") {
                        return (
                            <div key={i} className="fieldContainer">
                                <div className="fieldLabel">
                                    {item.fieldLabel}
                                </div>
                                <Controller
                                    {...{
                                        control,
                                        register,
                                        name: item.stateName,
                                        rules: {
                                            required: "This field is required",
                                            pattern: {
                                                value: item.pattern,
                                                message: item.patternErrMsg,
                                            },
                                        },
                                        render: (props) => (
                                            <InputField
                                                {...props}
                                                data={data}
                                                setData={setData}
                                            />
                                        ),
                                    }}
                                />
                                <ValidationErrorMessage
                                    errors={errors}
                                    item={item}
                                />
                            </div>
                        );
                    } else if (
                        item.type === "ConditionalText" &&
                        conditionalFields[item.stateName]
                    ) {
                        return (
                            <div key={i} className="fieldContainer">
                                <div className="fieldLabel">
                                    {item.fieldLabel}
                                </div>
                                <Controller
                                    {...{
                                        control,
                                        register,
                                        name: item.stateName,
                                        rules: {
                                            required: "This field is required",
                                            pattern: {
                                                value: item.pattern,
                                                message: item.patternErrMsg,
                                            },
                                        },
                                        render: (props) => (
                                            <InputField
                                                {...props}
                                                data={data}
                                                setData={setData}
                                            />
                                        ),
                                    }}
                                />
                                <ValidationErrorMessage
                                    errors={errors}
                                    item={item}
                                />
                            </div>
                        );
                    }

                    /////////////////////////////////////////////////// dropDown
                    else if (item.type === "dropDown") {
                        return (
                            <div key={i} className="fieldContainer">
                                <label className="fieldLabel">
                                    {item.fieldLabel}
                                </label>
                                <Controller
                                    {...{
                                        control,
                                        register,
                                        name: item.stateName,
                                        rules: {
                                            required: "This field is required",
                                            pattern: {
                                                value: item.pattern,
                                                message: item.patternErrMsg,
                                            },
                                        },
                                        render: (props) => (
                                            <DropDown
                                                {...props}
                                                item={item}
                                                data={data}
                                                setData={setData}
                                            />
                                        ),
                                    }}
                                />
                                <ValidationErrorMessage
                                    errors={errors}
                                    item={item}
                                />
                            </div>
                        );
                    }
                    /////////////////////////////////////////////////// radioButton
                    else if (item.type === "radioButton") {
                        return (
                            <div key={i} className="fieldContainer">
                                <div className="fieldLabel">
                                    {item.fieldLabel}
                                </div>
                                <Controller
                                    {...{
                                        control,
                                        register,
                                        name: item.stateName,
                                        rules: {
                                            required: "This field is required",
                                            pattern: {
                                                value: item.pattern,
                                                message: item.patternErrMsg,
                                            },
                                        },
                                        render: (props) => (
                                            <RadioButton
                                                {...props}
                                                data={data}
                                                setData={setData}
                                                item={item}
                                            />
                                        ),
                                    }}
                                />
                                <ValidationErrorMessage
                                    errors={errors}
                                    item={item}
                                />
                            </div>
                        );
                    } else if (
                        item.type === "ConditionalRadioButton" &&
                        conditionalFields[item.stateName]
                    ) {
                        return (
                            <div key={i} className="fieldContainer">
                                <div className="fieldLabel">
                                    {item.fieldLabel}
                                </div>
                                <Controller
                                    {...{
                                        control,
                                        register,
                                        name: item.stateName,
                                        rules: {
                                            required: "This field is required",
                                            pattern: {
                                                value: item.pattern,
                                                message: item.patternErrMsg,
                                            },
                                        },
                                        render: (props) => (
                                            <RadioButton
                                                {...props}
                                                data={data}
                                                setData={setData}
                                                item={item}
                                            />
                                        ),
                                    }}
                                />
                                <ValidationErrorMessage
                                    errors={errors}
                                    item={item}
                                />
                            </div>
                        );
                    }
                    /////////////////////////////////////////////////// textArea
                    else if (item.type === "textArea") {
                        return (
                            <label key={i} className={"fieldContainer"}>
                                <div className={"fieldLabel"}>
                                    {item.fieldLabel}
                                </div>
                                <Controller
                                    {...{
                                        control,
                                        register,
                                        name: item.stateName,
                                        rules: {
                                            required: "This field is required",
                                            pattern: {
                                                value: item.pattern,
                                                message: item.patternErrMsg,
                                            },
                                        },
                                        render: (props) => (
                                            <TextArea
                                                {...props}
                                                data={data}
                                                setData={setData}
                                            />
                                        ),
                                    }}
                                />
                                <ValidationErrorMessage
                                    errors={errors}
                                    item={item}
                                />
                            </label>
                        );
                    } else if (item.type === "textArea") {
                        return (
                            <label key={i} className={"fieldContainer"}>
                                <div className={"fieldLabel"}>
                                    {item.fieldLabel}
                                </div>
                                <Controller
                                    {...{
                                        control,
                                        register,
                                        name: item.stateName,
                                        rules: {
                                            required: "This field is required",
                                            pattern: {
                                                value: item.pattern,
                                                message: item.patternErrMsg,
                                            },
                                        },
                                        render: (props) => (
                                            <TextArea
                                                {...props}
                                                data={data}
                                                setData={setData}
                                            />
                                        ),
                                    }}
                                />
                                <ValidationErrorMessage
                                    errors={errors}
                                    item={item}
                                />
                            </label>
                        );
                    }
                    /////////////////////////////////////////////////// specialRange
                    else if (item.type === "specialRange") {
                        return (
                            <div key={i} className="fieldContainer">
                                <div className={"fieldLabel"}>
                                    {item.fieldLabel}
                                </div>
                                <Controller
                                    {...{
                                        control,
                                        register,
                                        name: item.stateName,
                                        rules: {
                                            required: "This field is required",
                                            pattern: {
                                                value: item.pattern,
                                                message: item.patternErrMsg,
                                            },
                                        },
                                        render: (props) => (
                                            <SpecialRange
                                                {...props}
                                                item={item}
                                                data={data}
                                                setData={setData}
                                            />
                                        ),
                                    }}
                                />
                                <ValidationErrorMessage
                                    errors={errors}
                                    item={item}
                                />
                            </div>
                        );
                    }
                    /////////////////////////////////////////////////// LimitedCheckBox
                    else if (
                        item.type === "LimitedCheckBox" &&
                        conditionalFields[item.stateName]
                    ) {
                        return (
                            <label key={i} className="fieldContainer">
                                <div className="fieldLabel">
                                    Choose your 2 secondary committees.
                                </div>
                                <Controller
                                    {...{
                                        control,
                                        register,
                                        name: item.stateName,
                                        rules: {
                                            required: "This field is required",
                                            pattern: {
                                                value: item.pattern,
                                                message: item.patternErrMsg,
                                            },
                                        },
                                        render: (props) => (
                                            <LimitedCheckBox
                                                {...props}
                                                data={data}
                                                item={item}
                                                setData={setData}
                                            />
                                        ),
                                    }}
                                />
                                <ValidationErrorMessage
                                    errors={errors}
                                    item={item}
                                />
                            </label>
                        );
                    }
                })}
            </>
        );
    };

    return (
        <FormDataContext.Provider
            value={{
                step,
                setStep,
                data,
                setData,
                inputsUiRendering,
                conditionalFields,
                //
                stepSwitchErrorPopup,
                setStepSwitchErrorPopup,
                //
                specialStepperErrorMessage,
                setSpecialStepperErrorMessage,
                //
                sameStepErrorMessage,
                setSameStepErrorMessage,
                //
                submitPopup,
                setSubmitPopup,
                //
                finishPopup,
                setFinishPopup,
            }}
        >
            {children}
        </FormDataContext.Provider>
    );
};

export default FormDataContext;
