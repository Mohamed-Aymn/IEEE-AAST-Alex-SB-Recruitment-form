export let stepTwo = [
    {
        id: 1,
        type: "text",
        fieldLabel: "What do IEEE letters refer to?",
        stateName: "ieeeLettersAbv",
        pattern: /[a-z]/i,
        patternErrMsg: "Write a valid input",
    },
    {
        id: 2,
        type: "text",
        fieldLabel: "What do you know about IEEE?",
        stateName: "whatDoYouKnowAboutIeee",
        pattern: /[a-z]/i,
        patternErrMsg: "Write a valid input",
    },
    {
        id: 3,
        type: "text",
        fieldLabel: "Why do you want to join IEEE?",
        stateName: "whyDoYouWantToJoinIEEE",
        pattern: /[a-z]/i,
        patternErrMsg: "Write a valid input",
    },
    {
        id: 4,
        type: "radioButton",
        fieldLabel: "Did you attend any IEEE events before?",
        stateName: "didAttendEvents",
        options: [
            { id: 1, value: "Yes" },
            { id: 2, value: "No" },
        ],
    },
    {
        id: 5,
        type: "ConditionalText",
        fieldLabel:
            "Can you please provide the events' names that you attended?",
        stateName: "eventNames",
        pattern: /[a-z]/i,
        patternErrMsg: "Write a valid input",
    },
];
