# IEEE AAST Alex SB - Recruitment Form

<p align="center">
<img src="src/assets/IEEE-main-logo.png" height="100">
<img src="src/assets/IEEE-Logo--blue.png" height="100" >

</p>

## Table of Contents

-   [Description](#description)
-   [Main aim / Breif](#main-aim--breif)
-   [Output/showcase](#output--showcase)
    -   [used technologies](#used-technologies)
    -   [design pattern](#design-pattern)

---

## Description

Recruitment form for IEEE AAST Alex SB (Institute Of Electrical and Electronics Engineers Arab Acadamey Student Branch) as it is developed to be a part of IEEE AAST Alex SB website https://ieeeaast.org to compete in an annually IEEE acceleration contest in 2022.

<details>
<summary>What is IEEE?</summary>
IEEE and its members inspire a global community to innovate for a better tomorrow through highly cited publications, conferences, technology standards, and professional and educational activities. IEEE is the trusted “voice” for engineering, computing, and technology information around the globe.

– Refrence: https://www.ieee.org/about/index.html

</details>

<details>
<summary>What is IEEE acceleration contest?</summary>
The IEEE acceleration contest is a program aiming to promote educational activities among IEEE volunteers and IEEE entities in Region 8, the program allows local initiatives to get higher visibility and to be supported by the prestigious IEEE R8 Technical & Educational activities board.

The program is looking for outstanding contributions and innovative initiatives in:

– An educational program for Pre-University Education

– An educational program for University Education

– An educational program for Continuing Education

The contest aims to:

Provide an opportunity to IEEE Region 8 members to initiate programs in Educational Activities;
Showcase the innovation and drive of IEEE Region, 8 members, to an international audience;
Find creative programs which provide value to IEEE membership and the general public.

– Refrence: https://ieeer8.org/category/technical-activities/professional-and-educational-activities/programs-professional-and-educational-activities/acceleration-contest/

</details>
<br>

[Back To The Top](#table-of-contents)

---

## Main aim / Breif

The main aim is to type dynamic code to avoid code repetition due to the existence of multiple input fields with different types such as text area, radio buttons, special input fields, etc..

[Back To The Top](#table-of-contents)

---

## Output / Showcase

### Used technologies

<ol>
    <li>React Hook Form</li>
    <li>sass</li>
    <li>React Icons</li>
</ol>

### Design pattern

used design pattern divides the project's code into three stages

1. The first stage is an array of objects that carry data for various input fields that there state names have been already declared in form global state as in this example, this stage can be replaced by typing these data in the database in the backend part of this website for easy manipulation for future edits and to make the flow of frontend part in this project shorter and easier by only fetching these data.

```js
    {
        type: "text",
        fieldLabel: "Phone number",
        stateName: "phoneNumber",
        pattern: /^[0][1-9]\d{9}$|^[1-9]\d{9}$/g,
        patternErrMsg: "Write a valid phone number (11 digits)",
    },
```

2. The second stage is to create an input filed component file that will be typed once and work for all input fields that have the same type as in this example of a simple input field component

```js
import React from "react";

export default InputField = (props) => {
    return (
        <input
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
```

3. The third and the last stage is the UI rendering function, which contains if conditions to render the right input field using a component that is specially developed for it, as in this example

```js
if (item.type === "text") {
    return (
        <div key={i} className="fieldContainer">
            <div className="fieldLabel">{item.fieldLabel}</div>
            <Controller
                {...{
                    control,
                    register,
                    name: item.stateName,
                    rules: {
                        required: "This field is required",
                        pattern: {
                            value: item.pattern,
                            message: item.patternErrMsg,
                        },
                    },
                    render: (props) => (
                        <InputField {...props} data={data} setData={setData} />
                    ),
                }}
            />
            <ValidationErrorMessage errors={errors} item={item} />
        </div>
    );
}
```

<br>

> Note: the advantage of this design pattern and the reason why it is chosen is that it perfectly matches the brief which is typing dynamic code that makes data update and maintenance pretty easy and simple. And also this design pattern is chosen to avoid code repetition as this form has multiple input fields.

<br>

[Back To The Top](#table-of-contents)

---
