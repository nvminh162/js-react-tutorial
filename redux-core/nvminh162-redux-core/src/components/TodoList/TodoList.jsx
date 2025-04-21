import React from 'react';
import TodoItem from '../TodoItem';
import { useSelector } from 'react-redux';
import { todosRemainingSelector } from '../../redux/selectors';

function TodoListComponent() {
    const todos = useSelector(todosRemainingSelector);

    return (
        <ul className="divide-y divide-gray-200">
            {todos.length === 0 ? (
                <li className="px-4 py-3 text-gray-500 text-center">No tasks yet!</li>
            ) : (
                todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
            )}
        </ul>
    );
}

export default TodoListComponent;
