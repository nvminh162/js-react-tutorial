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
