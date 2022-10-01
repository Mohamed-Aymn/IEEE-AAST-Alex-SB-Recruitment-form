import { useFormState, useWatch } from "react-hook-form";

function Controller({ control, register, name, rules, render }) {
    const value = useWatch({
        control,
        name,
    });
    /*
    this code block is used to console log errors of the inputs
    
    const { errors } = useFormState({
        control,
        name,
    });
    console.log(errors);
    */
    const props = register(name, rules);

    return render({
        value,
        onChange: (e) =>
            props.onChange({
                target: {
                    name,
                    value: e.target.value,
                },
            }),
        onBlur: props.onBlur,
        name: props.name,
        item: props.item,
        data: props.data,
        setData: props.setData,
    });
}

export default Controller;
