export default function FormTitle(props) {

    return (
        <div className="nav_Form">
            <h2>
                {" "}Thêm nhân viên{" "}
                <span><button onClick={props.handleHideForm}>X</button></span>
            </h2>
            <hr />
        </div>
    )
}