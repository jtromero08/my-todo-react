import Button from './Button'

const Todo = (props) => {
   return (<div>
        <p>{props.todo.todo}</p>
        <Button todo={props.todo} onClick={props.handler} type="Delete Todo" ></Button>
    </div>)
}

export default Todo; 