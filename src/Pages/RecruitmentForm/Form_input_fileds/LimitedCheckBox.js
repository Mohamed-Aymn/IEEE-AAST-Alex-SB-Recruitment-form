import React, { useState } from "react";

function LimitedCheckBox(props) {
    let [input, setInput] = useState([]);

    // let handleTwoCheckBoxes = (e) => {
    // let checkeChoice = (choice) => {
    //     return choice !== e.target.value;
    // };
    // if (input.length === 2) {
    //     if (input.includes(e.target.value)) {
    //         setInput({
    //             ...input,
    //             [props.name]: input.filter(checkeChoice),
    //         });
    //     }
    // } else if (input.includes(e.target.value)) {
    //     setInput({
    //         ...input,
    //         [props.name]: input.filter(checkeChoice),
    //     });
    // } else if (input == "none") {
    //     setInput({
    //         ...input,
    //         [props.name]: [],
    //     });
    // } else {
    //     setInput({
    //         ...input,
    //         [props.name]: [...input, e.target.value],
    //     });
    // }
    // console.log(input);
    // let joinedInput = input.join(" and ");
    // props.setData({ ...props.data, [props.stateName]: joinedInput });
    // props.onChange && props.onChange(e);
    // };

    // ---------------------------------------------- manipulation with array function
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
            {props.item.options.map((option, i) => {
                return (
                    <label key={i}>
                        <input
                            type="checkbox"
                            name={props.name}
                            className="radioItemInput"
                            value={option}
                            checked={props.data[props.name].includes(option)}
                            // checked={props.data[props.name].search(option)}
                            onChange={(e) => {
                                handleTwoCheckBoxes(e);
                            }}
                            // onClick={(e) => {
                            //     handleTwoCheckBoxes(e);
                            // }}
                        />
                        <span className="radioItemLabel">{option}</span>
                    </label>
                );
            })}
        </div>
    );
}

export default LimitedCheckBox;
