import React from "react";

function DropDown(props) {
    return (
        <select
            className="inputField"
            value={props.data[props.name]}
            name={props.name}
            onChange={(e) => {
                props.onChange && props.onChange(e);
                props.setData({ ...props.data, [props.name]: e.target.value });
            }}
        >
            {props.item.options.map((option, i) => {
                return (
                    <option key={i} className="dropDownItems" value={option}>
                        {option}
                    </option>
                );
            })}
        </select>
    );
}

export default DropDown;
