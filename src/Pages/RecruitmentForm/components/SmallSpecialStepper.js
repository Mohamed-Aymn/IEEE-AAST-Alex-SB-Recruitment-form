import React from "react";

function SmallSpecialStepper({ buttonsInfo, step, clickHandler }) {
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
                        onClick={() => clickHandler(button.id)}
                    >
                        Step {button.id}
                    </button>
                );
            })}
        </div>
    );
}

export default SmallSpecialStepper;
