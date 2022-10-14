export let stepTwo = [
    {
        type: "text",
        fieldLabel: "What do IEEE letters refer to?",
        stateName: "ieeeLettersAbv",
        pattern: /[a-z]/i,
        patternErrMsg: "Write a valid input",
    },
    {
        type: "text",
        fieldLabel: "What do you know about IEEE?",
        stateName: "whatDoYouKnowAboutIeee",
        pattern: /[a-z]/i,
        patternErrMsg: "Write a valid input",
    },
    {
        type: "text",
        fieldLabel: "Why do you want to join IEEE?",
        stateName: "whyDoYouWantToJoinIEEE",
        pattern: /[a-z]/i,
        patternErrMsg: "Write a valid input",
    },
    {
        type: "radioButton",
        fieldLabel: "Did you attend any IEEE events before?",
        stateName: "didAttendEvents",
        options: ["Yes", "No"],
    },
    {
        type: "ConditionalText",
        fieldLabel:
            "Can you please provide the events' names that you attended?",
        stateName: "eventNames",
        pattern: /[a-z]/i,
        patternErrMsg: "Write a valid input",
    },
];
