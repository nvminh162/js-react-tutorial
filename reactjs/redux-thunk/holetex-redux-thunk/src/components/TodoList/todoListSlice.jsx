import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// eslint-disable-next-line react-refresh/only-export-components
const todoListSlice = createSlice({
  name: "todoList",
  initialState: { status: "idle", todos: [] },
  //=> { type: `todoList/addTodo` }
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    toggleTodoStatus: (state, action) => {
      const currentTodo = state.todos.find(
        (todo) => todo.id === action.payload
      );
      if (currentTodo) {
        currentTodo.completed = !currentTodo.completed;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = "idle";
        state.todos = action.payload;
      })
      .addCase(addNewTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        const index = state.todos.findIndex(todo => todo.id === action.payload.id);
        if (index !== -1) {
          state.todos[index] = action.payload;
        }
      })
  },
});

export default todoListSlice;

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const res = await fetch("/api/todos");
  const data = await res.json();
  return data.todos;
});

export const addNewTodo = createAsyncThunk(
  "todos/addNewTodo",
  async (newTodo) => {
    const res = await fetch("/api/todos", {
      method: "POST",
      body: JSON.stringify(newTodo),
    });
    const data = await res.json();
    return data.todos;
  }
);

export const updateTodo = createAsyncThunk(
  "todos/updateTodo",
  async (updatedTodo) => {
    const res = await fetch("/api/updateTodo", {
      method: "POST",
      body: JSON.stringify(updatedTodo),
    });
    const data = await res.json();
    return data.todos;
  }
);

/* 
=> todos/fetchTodos/pending
=> todos/fetchTodos/fullfilled
=> todos/fetchTodos/rejected
*/
