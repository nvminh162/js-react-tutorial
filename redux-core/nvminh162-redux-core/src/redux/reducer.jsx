import { combineReducers } from "redux";

import todoFilterSlice from "../components/TodoFilter/TodoFilterSlice";
import TodoListSlice from "../components/TodoList/TodoListSlice";

const rootReducer = combineReducers({
    filters: todoFilterSlice,
    todoList: TodoListSlice
  });

export default rootReducer;
