import { createContext, useState } from "react";
import { inputsUiRendering } from "../components/inputsUiRendering";
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
        secondaryCommittee2: [],
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

    let [conditionalFields, setConditionalFields] = useState({
        eventNames: false,
        primaryCommittee: false,
        secondaryCommitee1: false,
        secondaryCommittee2: false,
        volunteersName: false,
        friendName: false,
        other: false,
    });

    let changeConditionalFieldsBoleanValue = (item) => {
        if (item == "eventNames") {
            setConditionalFields({
                ...conditionalFields,
                [item]: data.didAttendEvents === "Yes",
            });
        } else if (item == "primaryCommittee") {
            setConditionalFields({
                ...conditionalFields,
                [item]:
                    data.faculty ==
                        "Faculty Of Computer and Information Technology" ||
                    data.faculty == "Faculty Of Engineering",
            });
        } else if (item == "secondaryCommitee1") {
            setConditionalFields({
                ...conditionalFields,
                [item]:
                    data.faculty ==
                        "Faculty Of Computer and Information Technology" ||
                    data.faculty == "Faculty Of Engineering",
            });
        } else if (item == "secondaryCommittee2") {
            setConditionalFields({
                ...conditionalFields,
                [item]:
                    data.faculty !==
                        "Faculty Of Computer and Information Technology" &&
                    data.faculty !== "Faculty Of Engineering",
            });
        } else if (item == "volunteersName") {
            setConditionalFields({
                ...conditionalFields,
                [item]: data.howDidYouKnowAboutRecruitment == "Volunteer",
            });
        } else if (item == "friendName") {
            setConditionalFields({
                ...conditionalFields,
                [item]: data.howDidYouKnowAboutRecruitment == "Friend",
            });
        } else if (item == "other") {
            setConditionalFields({
                ...conditionalFields,
                [item]: data.howDidYouKnowAboutRecruitment == "Other",
            });
        }
    };

    let changeHiddenFieldsData = (item) => {
        if ([item] in conditionalFields && !conditionalFields[item]) {
            setData({ ...data, [item]: "none" });
        } else if (
            item in conditionalFields &&
            conditionalFields[item] &&
            data[item] == "none"
        ) {
            setData({ ...data, [item]: "" });
        }
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
                changeConditionalFieldsBoleanValue,
                changeHiddenFieldsData,
                //
                stepSwitchErrorPopup,
                setStepSwitchErrorPopup,
                //
                submitPopup,
                setSubmitPopup,
            }}
        >
            {children}
        </FormDataContext.Provider>
    );
};

export default FormDataContext;
