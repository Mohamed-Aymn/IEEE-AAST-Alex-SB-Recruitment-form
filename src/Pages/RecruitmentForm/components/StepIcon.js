import React from "react";
// import Icon

function StepIcon({ Icon, title, step }) {
    return (
        <div className="bigSpecialStepperButtonContainer">
            <div className="bigSpecialStepperIconContainer">
                <Icon className="bigSpecialStepperIcon" />
            </div>
            <span>{title}</span>
        </div>
    );
}

export default StepIcon;
