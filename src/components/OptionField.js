export default function OptionField(props) {
    return (
        <div className="item_Form">
            <label htmlFor={props.name}>{props.name} </label>
            <select
                id={props.name}
                name={props.name}
                value={props.value}
                onChange={props.handleInputChange}
            >
                <option value="Dept01">sale</option>
                <option value="Dept02">hr</option>
                <option value="Dept03">marketing</option>
                <option value="Dept04">it</option>
                <option value="Dept05">finance</option>
            </select>
        </div>
    )
}