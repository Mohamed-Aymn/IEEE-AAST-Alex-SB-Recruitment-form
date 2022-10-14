export let stepSix = [
    {
        type: "radioButton",
        fieldLabel: "How did you know about the recruitment?",
        stateName: "howDidYouKnowAboutRecruitment",
        options: [
            "Volunteer",
            "Facebook",
            "Wall Poster",
            "Booth",
            "Friend",
            "Instgram",
            "LinkedIn",
            "Other",
        ],
    },
    {
        type: "ConditionalText",
        fieldLabel: "What is the volunteer's name?",
        stateName: "volunteersName",
        pattern: /[a-z]/i,
        patternErrMsg: "write a valid input",
    },
    {
        type: "ConditionalText",
        fieldLabel: "What is your friend's name?",
        stateName: "friendName",
        pattern: /[a-z]/i,
        patternErrMsg: "write a valid input",
    },
    {
        type: "ConditionalText",
        fieldLabel:
            "Can you please explain more about how you knew about the recruitment?",
        stateName: "other",
        pattern: /[a-z]/i,
        patternErrMsg: "write a valid input",
    },
];
