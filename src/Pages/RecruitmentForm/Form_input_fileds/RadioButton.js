import React from "react";

function RadioButton(props) {
    return (
        <div className="radioSection">
            {props.item.options.map((option, i) => {
                return (
                    <label key={i}>
                        <input
                            className="radioItemInput"
                            type="radio"
                            name={props.name}
                            value={option}
                            checked={props.data[props.name] === option}
                            onChange={(e) => {
                                props.onChange && props.onChange(e);
                                props.setData({
                                    ...props.data,
                                    [props.name]: e.target.value,
                                });
                            }}
                        />
                        <span className="radioItemLabel">{option}</span>
                    </label>
                );
            })}
        </div>
    );
}

export default RadioButton;
