// Core
/* import { createStore } from "redux";
import rootReducer from "./reducer";
import { composeWithDevTools } from "@redux-devtools/extension";

const composedEnhancers = composeWithDevTools();
const store = createStore(rootReducer, composedEnhancers); //3 tham số


export default store; */

// toolkit
import { configureStore } from '@reduxjs/toolkit';
import { todoFilterSlice } from '../components/TodoFilter/todoFiltersSlice';
import { todoListSlice } from '../components/TodoList/todoListSlice';
const store = configureStore({
    reducer: {
        filters: todoFilterSlice.reducer,
        todoList: todoListSlice.reducer,
    },
});

export default store;
