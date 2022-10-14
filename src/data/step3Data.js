export let stepThree = [
    {
        type: "ConditionalRadioButton",
        fieldLabel: "Choose a primary committee.",
        stateName: "primaryCommittee",
        options: ["IT", "Techincal", "Simulation"],
    },
    {
        type: "ConditionalRadioButton",
        fieldLabel: "Choose a secondary committee.",
        stateName: "secondaryCommitee1",
        options: [
            "Media",
            "Marketing",
            "Documentation",
            "Registration",
            "Operations",
        ],
    },
    {
        type: "LimitedCheckBox",
        fieldLabel: "Choose your 2 secondary committees.",
        stateName: "secondaryCommittee2",
        options: [
            "Media",
            "Marketing",
            "Documentation",
            "Registration",
            "Operations",
        ],
    },
];
