import './../css/App.css';
import React from 'react';
import TodoList from './TodoList';
import Input from './Input';

class App extends React.Component {

  state = {
    todoList: []
  }

  // Provisional:
  hashFunction( string ) {
    if (string.length % 32 > 0) string += Array(33 - string.length % 32).join("z");
    let hash = '', bytes = []; 
    let i = 0;
    let j = i;
    let k = j;
    let a = k; 
    let dict = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','1','2','3','4','5','6','7','8','9'];
    let character;
    for (i = 0; i < string.length; i++ ) {
        character = string.charCodeAt(i);
        bytes[j++] = (character < 127) ? character & 0xFF : 127;
    }
    var chunk_len = Math.ceil(bytes.length / 32);   
    for (i=0; i<bytes.length; i++) {
        j += bytes[i];
        k++;
        if ((k === chunk_len) || (i === bytes.length-1)) {
            a = Math.floor( j / k );
            if (a < 32)
                hash += '0';
            else if (a > 126)
                hash += 'z';
            else
                hash += dict[  Math.floor( (a-32) / 2.76) ];
            j = k = 0;
        }
    }
    return hash;
  }

  addTodo = (todoData) => {
    todoData += (Math.floor(Math.random()* 32) + 10).toString()

    let todoId = this.hashFunction(todoData);
    let todoObj = {
      id: todoId,
      todo: todoData
    }

    this.setState(prevState => ({
      todoList: [...prevState.todoList, todoObj]
    }));
  }

  deleteTodo = (todoId) => {
    this.setState(prevState => ({
      todoList: prevState.todoList.filter(todo => todo.id !== todoId)
    }))
  }


  render() {
    return (
      <div className="App">
        <Input handler={this.addTodo} />
        <TodoList todoList={this.state.todoList} handler={this.deleteTodo}/>
      </div>
    )
  };
}

export default App;
