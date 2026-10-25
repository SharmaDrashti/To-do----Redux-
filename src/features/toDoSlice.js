import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [ {id: 1, text: "Hello World", completed: true} ]
};

const toDoSlice = createSlice({
  name: "todos",
  initialState,
  
  reducers: {
    addToDo: (state, action) => {
      state.todos.push({
        id: Date.now(),
        text: action.payload,
        completed: false
      });
    },

    toggleToDo: (state, action) => {
      const todo = state.todos.find(
        (todo) => todo.id === action.payload
      );

      if (todo) {
        todo.completed = !todo.completed;
      }
    },

    removeToDo: (state, action) => {
      state.todos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
    }
  }
});

export const { addToDo, toggleToDo, removeToDo } =
  toDoSlice.actions;

export default toDoSlice.reducer;