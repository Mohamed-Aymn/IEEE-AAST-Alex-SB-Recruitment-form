import React from "react";

function StepIcon({ Icon, title, step, id }) {
    // console.log(id);
    return (
        <div className="bigSpecialStepperButtonContainer">
            <div
                className={`bigSpecialStepperIconContainer ${
                    id == step
                        ? "bigSpecialStepperActiveIconContainer"
                        : id > step
                        ? "bigSpecialStepperDisabledIconContainer"
                        : ""
                }`}
            >
                <Icon
                    fill={
                        id == step
                            ? "#3992ff"
                            : id > step
                            ? "#363636"
                            : "#a3a3a3"
                    }
                />
            </div>
            <span
                className={
                    id == step
                        ? "bigSpecialStepperButtonLabel"
                        : id > step
                        ? "bigSpecialStepperDisapbledButtonLabel"
                        : "bigSpecialStepperInactiveButtonLabel"
                }
            >
                {title}
            </span>
        </div>
    );
}

export default StepIcon;
