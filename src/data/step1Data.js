export let stepOnePartOne = [
    {
        id: 1,
        type: "text",
        fieldLabel: "Full name",
        stateName: "fullName",
        pattern: /\b[a-zA-Z]+\s[a-zA-Z]+\b/,
        patternErrMsg:
            "Full name should be at least two words and shouldn't include any special charachters",
    },
    {
        id: 2,
        type: "text",
        fieldLabel: "Address",
        stateName: "address",
        pattern: /[a-z]/i,
        patternErrMsg: "Write a valid adddress",
    },
    {
        id: 3,
        type: "text",
        fieldLabel: "Phone number",
        stateName: "phoneNumber",
        pattern: /^[0][1-9]\d{9}$|^[1-9]\d{9}$/g,
        patternErrMsg: "Write a valid phone number (11 digits)",
    },
    {
        id: 4,
        type: "text",
        fieldLabel: "Email",
        stateName: "email",
        pattern:
            /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
        patternErrMsg: "Write a valid email",
    },
];

export let stepOnePartTwo = [
    {
        id: 1,
        type: "text",
        fieldLabel: "What is your total GPA?",
        stateName: "gpa",
        pattern: /[0-4]/,
        patternErrMsg: "GPA field should contain a numerical value from 0 to 4",
    },
    {
        id: 2,
        type: "dropDown",
        fieldLabel: "What semester are you in?",
        stateName: "semester",
        options: [
            { id: 0, value: "" },
            { id: 1, value: 1 },
            { id: 2, value: 2 },
            { id: 3, value: 3 },
            { id: 4, value: 4 },
            { id: 5, value: 5 },
            { id: 6, value: 6 },
            { id: 7, value: 7 },
            { id: 8, value: 8 },
            { id: 9, value: 9 },
            { id: 10, value: 10 },
            { id: 11, value: 11 },
            { id: 12, value: 12 },
        ],
    },
    {
        id: 3,
        type: "dropDown",
        fieldLabel: "What faculty are you in?",
        stateName: "faculty",
        options: [
            { id: 0, value: "" },
            {
                id: 1,
                value: "Faculty Of Technology and Maritime Transport",
            },
            { id: 2, value: "Faculty Of Engineering" },
            { id: 3, value: "Faculty Of Pharmacy" },
            {
                id: 4,
                value: "Faculty Of Computer and Information Technology",
            },
            { id: 5, value: "Faculty Of Management and Technology" },
            {
                id: 6,
                value: "Faculty Of Logistics and International Transport",
            },
            { id: 7, value: "Faculty Of Media and Language" },
            {
                id: 8,
                value: "Faculty Of Fisheries and Aquaculture Technology",
            },
            { id: 9, value: "Faculty Of Law" },
        ],
    },
    {
        id: 4,
        type: "text",
        fieldLabel: "What department are you in?",
        stateName: "department",
        pattern: /[a-z]/i,
        patternErrMsg: "Wirte a valid input",
    },
];

export let stepOnePartThree = [
    {
        id: 1,
        type: "radioButton",
        fieldLabel: "Did you join any civil work organization before?",
        stateName: "civilWork",
        options: [
            { id: 1, value: "Yes" },
            { id: 2, value: "No" },
        ],
    },
    {
        id: 2,
        type: "textArea",
        fieldLabel: "State any skills you have.",
        stateName: "skills",
        pattern: /[a-z]/i,
        patternErrMsg: "Wirte a valid input",
    },
    {
        id: 3,
        type: "textArea",
        fieldLabel: "State your hobbies.",
        stateName: "hobbies",
        pattern: /[a-z]/i,
        patternErrMsg: "Wirte a valid input",
    },
    {
        id: 4,
        type: "textArea",
        fieldLabel: "How would you describe yourself.",
        stateName: "describeYourself",
        pattern: /[a-z]/i,
        patternErrMsg: "Wirte a valid input",
    },
    {
        id: 5,
        type: "textArea",
        fieldLabel:
            "What achievemenets have you accomplished throughout your life.",
        stateName: "achievemenets",
        pattern: /[a-z]/i,
        patternErrMsg: "Wirte a valid input",
    },
];
