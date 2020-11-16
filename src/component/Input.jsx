import {useState} from 'react';
import Button from './Button';

const Input = (props) => {
    const [todo, setTodo] = useState("");

    return (
        <form>
            <input 
                type="text"
                value={todo}
                onChange={e => setTodo(e.target.value)}
                placeholder="TODO"
                required
            />
            <Button todo={todo} onClick={props.handler} type="Add Todo"/>
        </form>
    )
}

export default Input;