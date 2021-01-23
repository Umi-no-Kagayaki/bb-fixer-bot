import "./Log.css";

const Log = (props) => {
    return(
        <div
            className = "comment"
        >
            {props.comment}
        </div>
    );
};

export default Log;