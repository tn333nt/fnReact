import { useDispatch, useSelector } from "react-redux"
import { setFormStateAdd, setFormStateUpdate, setValues } from "../redux/action"
import InputField from "./InputField"
import OptionField from "./OptionField"
import SubmitButton from "./SubmitButton"
import FormTitle from "./FormTitle"
import "./Form.css"

export default function Form(props) {
    const dispatch = useDispatch()
    const values = useSelector(state => state.values)
    const formStateAdd = useSelector(state => state.formState.toAdd)
    const formStateUpdate = useSelector(state => state.formState.toUpdate)

    const handleInputChange = (e) => {
        dispatch(setValues({
            ...values,
            [e.target.name]: e.target.value
        }))
    }

    const handleHideForm = () => {
        formStateAdd && dispatch(setFormStateAdd(false))
        formStateUpdate && dispatch(setFormStateUpdate(false))
    }

    return (
        <div className="background_ShowForm">
            <div className="container_ShowForm">
                <div className="container_Form">
                    <FormTitle handleHideForm={handleHideForm} />

                    <InputField
                        name="name"
                        id="name"
                        type="text"
                        value={values.name}
                        handleInputChange={handleInputChange}
                        htmlFor="name" />

                    <InputField
                        name="doB"
                        id="doB"
                        type="date"
                        value={values.doB}
                        handleInputChange={handleInputChange}
                        htmlFor="doB" />

                    <InputField
                        name="startDate"
                        id="startDate"
                        type="date"
                        value={values.startDate}
                        handleInputChange={handleInputChange}
                        htmlFor="startDate" />

                    <OptionField
                        name="departmentId"
                        id="departmentId"
                        value={values.departmentId}
                        handleInputChange={handleInputChange}
                        htmlFor="departmentId" />

                    <InputField
                        name="salaryScale"
                        id="salaryScale"
                        type="number"
                        value={values.salaryScale}
                        handleInputChange={handleInputChange}
                        htmlFor="salaryScale" />

                    <InputField
                        name="annualLeave"
                        id="annualLeave"
                        type="number"
                        value={values.annualLeave}
                        handleInputChange={handleInputChange}
                        htmlFor="annualLeave" />

                    <InputField
                        name="overTime"
                        id="overTime"
                        type="number"
                        value={values.overTime}
                        handleInputChange={handleInputChange}
                        htmlFor="overTime" />

                    <SubmitButton handleSubmit={props.handleSubmit} />
                </div>
            </div>
        </div>
    )
}