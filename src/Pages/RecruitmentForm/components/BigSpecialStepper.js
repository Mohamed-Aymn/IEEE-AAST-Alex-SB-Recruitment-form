import React from "react";
import StepIcon from "./StepIcon";

function BigSpecialStepper({ buttonsInfo, step, clickHandler }) {
    return (
        <div>
            {buttonsInfo.map((button) => {
                return (
                    <div
                        onClick={() => clickHandler(button.id)}
                        key={button.id}
                    >
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
