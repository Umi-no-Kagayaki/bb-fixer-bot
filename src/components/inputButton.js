import "./inputButton.css";

const InputButton = (props) => {
    return (
        <button
            onClick = {() => {props.onClick(props.page)}}
        >
            {props.value}
        </button>
    );
}

export default InputButton;