import "./inputButton.css";
import setState from "../functions/setState";

const InputButton = (props) => {
    return (
        <button
            onClick = {() => {setState(props.setState)}}
        >
            入力
        </button>
    );
}

export default InputButton;