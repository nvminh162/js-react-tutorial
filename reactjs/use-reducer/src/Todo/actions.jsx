import { SET_FIELD, ADD_TODO, DELETE_TODO } from './constants'

export const setField = (payload) => {
    return {
        type: SET_FIELD,
        payload,
    };
};
export const addTodo = (payload) => {
    return {
        type: ADD_TODO,
        payload,
    };
};
export const deleteTodo = (payload) => {
    return {
        type: DELETE_TODO,
        payload,
    };
};