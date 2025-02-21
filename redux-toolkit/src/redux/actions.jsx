export const searchFilterChange = (payload) => ({
  type: "filters/searchFilterChange",
  payload,
});

export const statusFilterChange = (payload) => ({
  type: "filters/statusFilterChange",
  payload,
});

export const prioritiesFilterChange = (payload) => ({
  type: "filters/prioritiesFilterChange",
  payload,
});

export const addTodo = (payload) => ({
  type: "todoList/addTodo",
  payload,
});

// toggle chuyen doi boolean true -> false, false -> true
export const toggleTodoStatus = (todoId) => ({
  type: "todoList/toggleTodoStatus",
  payload: todoId,
});