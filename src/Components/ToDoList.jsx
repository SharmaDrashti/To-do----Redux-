import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToDo, toggleToDo, removeToDo } from '../features/toDoSlice';

const ToDoList = () => {

    const [text, setText] = useState("");
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const handleAdd = () => {
        if(text.trim()){
            dispatch(addToDo (text));
            setText("");
        }
    }

  return (
    <div>
        <input type='text' placeholder='Enter todo...' value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={handleAdd}>Add</button>
 <ul style={{listStyle: "none", marginTop: "50px"}}>
            {todos.map((todo) => (
               <li key={todo.id} style={{marginBottom: "10px"}}>
               <span onClick={() => dispatch(toggleToDo(todo.id))}
                 style={{textDecoration: todo.completed ? "line-through" : "none", cursor: "pointer"}}> 
                 {todo.text}
                 
               </span>

                 <button onClick={() => dispatch(removeToDo(todo.id))} style={{marginLeft: "10px"}}>
                    ❌
                </button>

                </li>
            ) )} 
        </ul>
    </div>
  )
}

export default ToDoList;