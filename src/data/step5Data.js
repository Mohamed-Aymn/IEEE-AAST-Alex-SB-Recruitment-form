export let stepFive = [
    {
        type: "text",
        fieldLabel: "How many hours can you commit to IEEE per week?",
        stateName: "commitmentHours",
        pattern: /[a-z]/i,
        patternErrMsg: "write a valid input",
    },
    {
        type: "textArea",
        fieldLabel:
            "Would you rather always be your own boss? And how do you react to taking orders or tasks?",
        stateName: "ratherBeYourOwnBoss",
        pattern: /[a-z]/i,
        patternErrMsg: "write a valid input",
    },
    {
        type: "textArea",
        fieldLabel: "What sets you apart from other candidates?",
        stateName: "setsYouApartFromCandidates",
        pattern: /[a-z]/i,
        patternErrMsg: "write a valid input",
    },
];
