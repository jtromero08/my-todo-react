import { useState } from "react";

const DropDown = props => {
    const [progressStatus, setProgressStatus] = useState("inProgress");
    const onChangeHandler = e => {
        let status = e.target.value;
        setProgressStatus(status);
        props.submitHandler(status);
    }

    return (
        <form>
            <select value={progressStatus} onChange={onChangeHandler}>
                <option value="inProgress">In Progress</option>
                <option value="finished">Finish</option>
            </select>
        </form>
    )
}

export default DropDown;