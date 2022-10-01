import React from "react";

function RadioButton(props) {
    return (
        <div className="radioSection">
            {props.item.options.map((option) => {
                return (
                    <label key={option.id}>
                        <input
                            className="radioItemInput"
                            type="radio"
                            name={props.name}
                            value={option.value}
                            checked={props.data[props.name] === option.value}
                            onChange={(e) => {
                                props.onChange && props.onChange(e);
                                props.setData({
                                    ...props.data,
                                    [props.name]: e.target.value,
                                });
                            }}
                        />
                        <span className="radioItemLabel">{option.value}</span>
                    </label>
                );
            })}
        </div>
    );
}

export default RadioButton;
