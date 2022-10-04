import React from "react";
import StepIcon from "./StepIcon";

function BigSpecialStepper({ buttonsInfo, step }) {
    return (
        <div className="bigSpecialStepperContainer">
            {buttonsInfo.map((button) => {
                return (
                    <div key={button.id}>
                        <StepIcon
                            key={button.id}
                            title={button.name}
                            Icon={button.icon}
                            step={step}
                            id={button.id}
                        />
                    </div>
                );
            })}
        </div>
    );
}

export default BigSpecialStepper;
