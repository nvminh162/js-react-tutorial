import { combineReducers } from 'redux';

import filtersReducer from '../components/Filters/FiltersSlice';
import todoListReducer from '../components/TodoList/TodoListSlice';

//#1: ko dung combineReducers
/* const rootReducer = (state = {}, action) => {
  console.log(state);
  return {
    filters: filtersReducer(state.filters, action),
    todoList: todoListReducer(state.todoList, action),
  }
}; */

//#2:
const rootReducer = combineReducers({
  filters: filtersReducer,
  todoList: todoListReducer,
})

export default rootReducer;
