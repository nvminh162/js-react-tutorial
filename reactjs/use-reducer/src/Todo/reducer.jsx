import { SET_FIELD, ADD_TODO, DELETE_TODO } from './constants';

export const initState = {
    field: '',
    todos: [],
};

const reducer = (state, action) => {
    switch (action.type) {
        case SET_FIELD:
            return {
                ...state,
                field: action.payload,
            };
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };
        /* case DELETE_TODO: {
            const newTodos = [...state.todos];
            newTodos.splice(action.payload, 1);
            return {
                ...state,
                todos: newTodos,
            };
        } */
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((_, i) => i != action.payload),
            };
        default:
            return state;
    }
};

export default reducer;