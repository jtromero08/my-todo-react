import React from 'react';
import Todo from './Todo';

const TodoList = (props) => (
    <div>
        {
            props.todoList.map(todo => <Todo key={todo.id} handler={props.handler} todo={todo}  />)
        }
    </div>
)

export default TodoList;