
export default function ShowForm(props) {

    return (
        <>
            <button
                className="btn_AddStaff"
                onClick={props.handleAddStaff}
                style={{ 
                    padding: '10px 25px', 
                    backgroundColor: "#007bfe", 
                    borderRadius: 9, 
                    border: "3px solid #3a99ff", 
                    color: "white", 
                    fontSize: 21 }}
            > + </button>
        </>
    )
}