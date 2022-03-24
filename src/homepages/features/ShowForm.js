
export default function ShowForm(props) {

    return (
        <>
            <button
                className="btn_AddStaff"
                onClick={props.handleAddStaff}
                style={{ 
                    padding: '10px 25px', 
                    backgroundColor: "#3085d6", 
                    borderRadius: 9, 
                    border: "3px solid #619dd6", 
                    color: "white", 
                    fontSize: 21 }}
            > + </button>
        </>
    )
}