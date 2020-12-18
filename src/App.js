import React, { useState, useEffect } from "react";
import {Button, FormControl, InputLabel, Input} from '@material-ui/core';
import './App.css';
import Todo from "./Todo.js";
import db from "./firebase.js";
import firebase from 'firebase';


function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id , todo: doc.data().todo})));
    })
  }, [])

  function addTodo(event){    
    event.preventDefault();

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('')
  }

  return (
    <div className="App">
      <h1>React Todo App With Firebase!</h1>
      <form>
        <FormControl>
          <InputLabel>Write Todo Here</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
        </FormControl>
        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
            Primary
        </Button>
      </form>
      <ul>
        {todos.map(todo => {
          return <Todo todo={todo}/>
        })}
      </ul>
    </div>
  );
}

export default App;
