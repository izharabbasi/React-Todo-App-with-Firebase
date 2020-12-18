import React, { useState } from "react";
import {Button} from '@material-ui/core';
import './App.css';


function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  function addTodo(event){
    setTodos([...todos, input])

    event.preventDefault();
    setInput('')
  }

  return (
    <div className="App">
      <h1>React Todo App With Firebase!</h1>
      <form>
        <input value={input} onChange={event => setInput(event.target.value)}/>
        {/* <button type="submit" onClick={addTodo}>Add Todo</button> */}
        <Button type="submit" onClick={addTodo} color="primary">
            Primary
        </Button>
      </form>
      <ul>
        {todos.map(todo => {
          return <li>{todo}</li>
        })}
      </ul>
    </div>
  );
}

export default App;
