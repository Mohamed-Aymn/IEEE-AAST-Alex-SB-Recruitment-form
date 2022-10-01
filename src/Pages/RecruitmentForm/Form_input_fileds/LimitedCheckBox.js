import React from "react";

function LimitedCheckBox(props) {
    let handleTwoCheckBoxes = (e) => {
        let checkeChoice = (choice) => {
            return choice !== e.target.value;
        };

        if (props.data[props.name].length === 2) {
            if (props.data[props.name].includes(e.target.value)) {
                props.setData({
                    ...props.data,
                    [props.name]: props.data[props.name].filter(checkeChoice),
                });
            }
        } else if (props.data[props.name].includes(e.target.value)) {
            props.setData({
                ...props.data,
                [props.name]: props.data[props.name].filter(checkeChoice),
            });
        } else if (props.data[props.name] == "none") {
            props.setData({
                ...props.data,
                [props.name]: [],
            });
        } else {
            props.setData({
                ...props.data,
                [props.name]: [...props.data[props.name], e.target.value],
            });
        }
        props.onChange && props.onChange(e);
    };

    return (
        <div className="radioSection">
            {props.item.options.map((option) => {
                return (
                    <label key={option.id}>
                        <input
                            type="checkbox"
                            name={props.name}
                            className="radioItemInput"
                            value={option.value}
                            checked={props.data[props.name].includes(
                                option.value
                            )}
                            onChange={() => null}
                            onClick={(e) => {
                                handleTwoCheckBoxes(e);
                            }}
                        />
                        <span className="radioItemLabel">{option.value}</span>
                    </label>
                );
            })}
        </div>
    );
}

export default LimitedCheckBox;
