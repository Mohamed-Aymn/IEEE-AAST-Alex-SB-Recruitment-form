function Controller({ register, name, rules, render }) {
    const props = register(name, rules);

    return render({
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
        validate: props.validate,
    });
}

export default Controller;
