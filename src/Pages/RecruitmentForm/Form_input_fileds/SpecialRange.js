import React from "react";

function SpecialRange(props) {
    let numbers = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

    return (
        <div className="specialRangeContainer">
            {numbers.map((number) => {
                return (
                    <label key={number} className="specialRangeItem">
                        <input
                            type="radio"
                            name={props.name}
                            className="specialRangeInput"
                            checked={props.data[props.name] == number}
                            value={number}
                            onChange={(e) => {
                                props.onChange && props.onChange(e);
                                props.setData({
                                    ...props.data,
                                    [props.name]: e.target.value,
                                });
                            }}
                        />
                        <span className="specialRangeLabel">{number}</span>
                    </label>
                );
            })}
        </div>
    );
}

export default SpecialRange;
