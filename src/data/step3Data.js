export let stepThree = [
    {
        id: 1,
        type: "ConditionalRadioButton",
        fieldLabel: "Choose a primary committee.",
        stateName: "primaryCommittee",
        options: [
            { id: 1, value: "IT" },
            { id: 2, value: "Techincal" },
            { id: 3, value: "Simulation" },
        ],
    },
    {
        id: 2,
        type: "ConditionalRadioButton",
        fieldLabel: "Choose a secondary committee.",
        stateName: "secondaryCommitee1",
        options: [
            { id: 1, value: "Media" },
            { id: 2, value: "Marketing" },
            { id: 3, value: "Documentation" },
            { id: 4, value: "Registration" },
            { id: 5, value: "Operations" },
        ],
    },
    {
        id: 3,
        type: "LimitedCheckBox",
        fieldLabel: "Choose your 2 secondary committees.",
        stateName: "secondaryCommittee2",
        options: [
            { id: 1, value: "Media" },
            { id: 2, value: "Marketing" },
            { id: 3, value: "Documentation" },
            { id: 4, value: "Registration" },
            { id: 5, value: "Operations" },
        ],
        // visablityCondition: stepOneData.faculty,
        // condtionValue: "Faculty Of Computer and Information Technology",
    },
];
