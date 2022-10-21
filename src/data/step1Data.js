export let stepOnePartOne = [
    {
        type: "text",
        fieldLabel: "Full name",
        stateName: "fullName",
        pattern: /\b[a-zA-Z]+\s[a-zA-Z]+\b/,
        patternErrMsg:
            "Full name should be at least two words and shouldn't include any special charachters",
    },
    {
        type: "text",
        fieldLabel: "Address",
        stateName: "address",
        pattern: /[a-z]/i,
        patternErrMsg: "Write a valid adddress",
    },
    {
        type: "text",
        fieldLabel: "Phone number",
        stateName: "phoneNumber",
        pattern: /^[0][1-9]\d{9}$|^[1-9]\d{9}$/g,
        patternErrMsg: "Write a valid phone number (11 digits)",
    },
    {
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
        type: "text",
        fieldLabel: "What is your total GPA?",
        stateName: "gpa",
        pattern: /^[0-3](\.[0-9]{1,2})?$|^4(\.[0]{1,2})?$/g,
        patternErrMsg: "GPA field should contain a numerical value from 0 to 4",
    },
    {
        type: "dropDown",
        fieldLabel: "What semester are you in?",
        stateName: "semester",
        options: ["", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
    {
        type: "dropDown",
        fieldLabel: "What faculty are you in?",
        stateName: "faculty",
        options: [
            "",
            "Faculty Of Technology and Maritime Transport",
            "Faculty Of Engineering",
            "Faculty Of Pharmacy",
            "Faculty Of Computer and Information Technology",
            "Faculty Of Management and Technology",
            "Faculty Of Logistics and International Transport",
            "Faculty Of Media and Language",
            "Faculty Of Fisheries and Aquaculture Technology",
            "Faculty Of Law",
        ],
    },
    {
        type: "text",
        fieldLabel: "What department are you in?",
        stateName: "department",
        pattern: /[a-z]/i,
        patternErrMsg: "Wirte a valid input",
    },
];

export let stepOnePartThree = [
    {
        type: "radioButton",
        fieldLabel: "Did you join any civil work organization before?",
        stateName: "civilWork",
        options: ["Yes", "No"],
    },
    {
        type: "textArea",
        fieldLabel: "State any skills you have.",
        stateName: "skills",
        pattern: /[a-z]/i,
        patternErrMsg: "Wirte a valid input",
    },
    {
        type: "textArea",
        fieldLabel: "State your hobbies.",
        stateName: "hobbies",
        pattern: /[a-z]/i,
        patternErrMsg: "Wirte a valid input",
    },
    {
        type: "textArea",
        fieldLabel: "How would you describe yourself.",
        stateName: "describeYourself",
        pattern: /[a-z]/i,
        patternErrMsg: "Wirte a valid input",
    },
    {
        type: "textArea",
        fieldLabel:
            "What achievemenets have you accomplished throughout your life.",
        stateName: "achievemenets",
        pattern: /[a-z]/i,
        patternErrMsg: "Wirte a valid input",
    },
];
