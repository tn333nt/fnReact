export default function SubmitButton(props) {
    return (
        <button
            className="btn_Form"
            onClick={props.handleSubmit}
        > Submit </button>
    )
}