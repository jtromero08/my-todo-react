const Button = (props) => {
    let todoOrId = {};


    if(props.type === "Add Todo") {
        todoOrId = props.todo;
    }

    if(props.type === "Delete Todo") {
        todoOrId = props.todo.id;
    }

    return (
        <button 
            type="button" 
            onClick={e => {e.preventDefault(); props.onClick(todoOrId)}}
        >{props.type}</button>
    )
}

export default Button;