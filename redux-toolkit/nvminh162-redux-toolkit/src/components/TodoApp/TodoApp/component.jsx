import React from 'react';
import TodoForm from '../TodoForm';
import TodoFilter from '../TodoFilter';
import TodoList from '../TodoList';

function TodoApp() {
  const sampleTodos = [
    {
      id: 1,
      text: 'Learn React',
      completed: true,
      priority: 'high'
    },
    {
      id: 2,
      text: 'Build a Todo App',
      completed: false,
      priority: 'medium'
    },
    {
      id: 3,
      text: 'Deploy to production',
      completed: false,
      priority: 'low'
    }
  ];

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
      <TodoForm />
      <TodoFilter />
      <TodoList todos={sampleTodos} />
    </div>
  );
}

export default TodoApp;