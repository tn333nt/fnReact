export default function InputField(props) {
    return (
        <div className="item_Form">
            <label htmlFor={props.name}>{props.name}</label>
            <input
                id={props.name}
                name={props.name}
                value={props.value}
                onChange={props.handleInputChange}
                type={props.type}
            />
        </div>
    )
}