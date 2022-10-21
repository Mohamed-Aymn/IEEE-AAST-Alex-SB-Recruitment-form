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
        type: "ConditionalRadioButton",
        fieldLabel: "Choose your first secondary committees.",
        stateName: "firstNonTechnicalSecondaryCommittee",
        options: [
            "Media",
            "Marketing",
            "Documentation",
            "Registration",
            "Operations",
        ],
    },
    {
        type: "ConditionalRadioButton",
        fieldLabel: "Choose your second secondary committees.",
        stateName: "secondNonTechnicalSecondaryCommittee",
        options: [
            "Media",
            "Marketing",
            "Documentation",
            "Registration",
            "Operations",
        ],
    },
];
