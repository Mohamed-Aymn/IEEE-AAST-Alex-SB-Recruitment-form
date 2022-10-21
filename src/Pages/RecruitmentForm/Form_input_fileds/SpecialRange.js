import React from "react";

function SpecialRange(props) {
    return (
        <div className="specialRangeContainer">
            {props.item.options.map((option, i) => {
                return (
                    <label key={i} className="specialRangeItem">
                        <input
                            type="radio"
                            name={props.name}
                            className="specialRangeInput"
                            checked={props.data[props.name] == option}
                            value={option}
                            onChange={(e) => {
                                props.onChange && props.onChange(e);
                                props.setData({
                                    ...props.data,
                                    [props.name]: e.target.value,
                                });
                            }}
                        />
                        <span className="specialRangeLabel">{option}</span>
                    </label>
                );
            })}
        </div>
    );
}

export default SpecialRange;
