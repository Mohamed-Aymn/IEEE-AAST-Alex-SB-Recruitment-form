export let stepSix = [
    {
        id: 1,
        type: "radioButton",
        fieldLabel: "How did you know about the recruitment?",
        stateName: "howDidYouKnowAboutRecruitment",
        options: [
            { id: 1, value: "Volunteer" },
            { id: 2, value: "Facebook" },
            { id: 3, value: "Wall Poster" },
            { id: 4, value: "Booth" },
            { id: 5, value: "Friend" },
            { id: 6, value: "Instgram" },
            { id: 7, value: "LinkedIn" },
            { id: 8, value: "Other" },
        ],
    },
    {
        id: 2,
        type: "ConditionalText",
        fieldLabel: "What is the volunteer's name?",
        stateName: "volunteersName",
        pattern: /[a-z]/i,
        patternErrMsg: "write a valid input",
    },
    {
        id: 3,
        type: "ConditionalText",
        fieldLabel: "What is your friend's name?",
        stateName: "friendName",
        pattern: /[a-z]/i,
        patternErrMsg: "write a valid input",
    },
    {
        id: 4,
        type: "ConditionalText",
        fieldLabel:
            "Can you please explain more about how you knew about the recruitment?",
        stateName: "other",
        pattern: /[a-z]/i,
        patternErrMsg: "write a valid input",
    },
];
