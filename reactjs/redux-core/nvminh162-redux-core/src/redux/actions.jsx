import { 
    ADD_TODO, 
    TOGGLE_TODO, 
    DELETE_TODO, 
    SEARCH_FILTER, 
    STATUS_FILTER, 
    PRIORITY_FILTER 
} from './constants';

export const addTodoList = (payload) => {
    return {
        type: ADD_TODO,
        payload,
    };
};

export const toggleTodoList = (payload) => {
    return {
        type: TOGGLE_TODO,
        payload,
    };
};

export const deleteTodoList = (payload) => {
    return {
        type: DELETE_TODO,
        payload,
    };
};

export const searchFilter = (payload) => {
    return {
        type: SEARCH_FILTER,
        payload,
    };
};

export const statusFilter = (payload) => {
    return {
        type: STATUS_FILTER,
        payload,
    };
};

export const priorityFilter = (payload) => {
    return {
        type: PRIORITY_FILTER,
        payload,
    };
};