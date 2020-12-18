import {Button ,List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';
import React from 'react';
import "./Todo.css";
import db from "./firebase.js";


function Todo(props) {
    return (
        <List className="todo_List">
            <ListItem>
                <ListItemAvatar>
                </ListItemAvatar>
                    <ListItemText primary='Todo' secondary={props.todo.todo} />
            </ListItem>
            <Button onClick={event => db.collection('todos').doc(props.todo.id).delete()}><DeleteForeverTwoToneIcon/></Button>
        </List>
    )
}

export default Todo
