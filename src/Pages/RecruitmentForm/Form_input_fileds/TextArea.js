import React from "react";

const Input = (props) => {
    return (
        <textarea
            className="inputField"
            name={props.name}
            onChange={(e) => {
                props.onChange && props.onChange(e);
                props.setData({ ...props.data, [props.name]: e.target.value });
            }}
            value={props.data[props.name]}
        />
    );
};

export default Input;
