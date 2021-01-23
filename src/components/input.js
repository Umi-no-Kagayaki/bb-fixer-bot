import "./input.css";

const Input = (props) => {
    return (
        <textarea
            className = "input"

            value = {props.value}

            onChange = {(value) => props.onChange(value.target.value)}
        />
    );
};

export default Input;