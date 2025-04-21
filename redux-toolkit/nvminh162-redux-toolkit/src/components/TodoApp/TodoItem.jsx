import React from 'react';

function TodoItem({ todo }) {
  return (
    <li className="px-4 py-3 flex items-center justify-between">
      <div className="flex items-center">
        <input 
          type="checkbox" 
          defaultChecked={todo.completed}
          className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
        />
        <span 
          className={`ml-3 ${todo.completed ? 'line-through text-gray-400' : 'text-gray-800'}`}
        >
          {todo.text}
        </span>
        <span 
          className={`ml-2 text-xs px-2 py-1 rounded-full ${
            todo.priority === 'high' ? 'bg-red-100 text-red-800' : 
            todo.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' : 
            'bg-green-100 text-green-800'
          }`}
        >
          {todo.priority}
        </span>
      </div>
      <button 
        className="ml-2 text-red-500 hover:text-red-700 focus:outline-none"
      >
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </li>
  );
}

export default TodoItem;