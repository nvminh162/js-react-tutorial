import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos }) {
  return (
    <ul className="divide-y divide-gray-200">
      {todos.length === 0 ? (
        <li className="px-4 py-3 text-gray-500 text-center">No tasks yet!</li>
      ) : (
        todos.map(todo => (
          <TodoItem 
            key={todo.id}
            todo={todo}
          />
        ))
      )}
    </ul>
  );
}

export default TodoList;