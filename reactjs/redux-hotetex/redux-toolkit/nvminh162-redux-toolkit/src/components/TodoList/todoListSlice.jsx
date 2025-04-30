// core
/* import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../../redux/constants';

const initState = [
    { id: 1, name: 'Learn Redux', completed: false, priority: 'medium' },
    { id: 2, name: 'Learn Yoga', completed: true, priority: 'high' },
];

const todoListReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload];
        case TOGGLE_TODO:
            return state.map((todo) => (todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo));
        case DELETE_TODO:
            return state.filter((todo) => todo.id != action.payload);
        default:
            return state;
    }
};

export default todoListReducer;
 */

import { createSlice } from "@reduxjs/toolkit";

// toolkit

export const todoListSlice = createSlice({
    name: 'todoList',
    initialState: [
        { id: 1, name: 'Learn Redux', completed: false, priority: 'medium' },
        { id: 2, name: 'Learn Yoga', completed: true, priority: 'high' },
    ],
    reducers: {
        addTodoList: (state, action) => {
            state.push(action.payload)
        },
        toggleTodoList: (state, action) => {
            const currentTodo = state.find(todo => todo.id === action.payload)
            currentTodo.completed = !currentTodo.completed
        },
        deleteTodoList: (state, action) => {
            return state.filter((todo) => todo.id != action.payload)
        },
    }
})