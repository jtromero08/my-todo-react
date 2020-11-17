import { useState } from 'react'
import Button from './Button'
import DropDown from './DropDown'

const Todo = (props) => {
    const [todoStatus, setTodoStatus] = useState("inProgress");
    const handleSetTodoStatus = status => {
        setTodoStatus(status);
    }


    return (
        <div>
            <p style={(todoStatus === "finished") ? {textDecorationLine: "line-through"} : {textDecorationLine: "none"}}>{props.todo.todo}</p>
            <Button todo={props.todo} onClick={props.handler} type="Delete Todo" ></Button>
            <DropDown submitHandler={setTodoStatus} />
        </div>
    )
}

export default Todo; 