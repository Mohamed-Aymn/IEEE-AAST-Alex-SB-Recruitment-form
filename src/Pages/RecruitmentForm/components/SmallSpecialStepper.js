import React from "react";

function SmallSpecialStepper({ buttonsInfo, step }) {
    return (
        <div className="smallSpecialStepperButtonsContainer">
            {buttonsInfo.map((button) => {
                return (
                    <button
                        className={`smallSpecialStepperButton ${
                            button.id == step
                                ? "smallSpecialStepperActiveButton"
                                : button.id > step
                                ? "smallSpecialStepperDisapledButton"
                                : "smallSpecialStepperInactiveButton"
                        }`}
                        key={button.id}
                    >
                        Step {button.id}
                    </button>
                );
            })}
        </div>
    );
}

export default SmallSpecialStepper;
