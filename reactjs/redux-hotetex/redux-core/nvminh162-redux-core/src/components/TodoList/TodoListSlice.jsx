import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../../redux/constants';

const initState = [
    { id: 1, name: 'Learn Redux', completed: false, priority: 'medium' },
    { id: 2, name: 'Learn Yoga', completed: true, priority: 'high' },
];

const TodoListSlice = (state = initState, action) => {
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

export default TodoListSlice;
