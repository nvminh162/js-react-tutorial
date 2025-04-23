import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { todoListSlice } from '../TodoList/todoListSlice';

function TodoForm() {
    const [todoName, setTodoName] = useState('');
    const handleOnChangeTodoName = (e) => {
        setTodoName(e.target.value);
    };
    const todoNameRef = useRef();

    const [priority, setPriority] = useState('low');
    const handleOnChangePriority = (e) => {
        setPriority(e.target.value);
    };

    const dispatch = useDispatch();

    const handleAddTodo = () => {
        const value = {
            id: uuidv4(),
            name: todoName,
            completed: false,
            priority: priority,
        };
        dispatch(todoListSlice.actions.addTodoList(value));
        setTodoName('');
        setPriority('low');
        todoNameRef.current.focus();
    };

    return (
        <div className="px-4 py-4 bg-gray-50">
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">Todo App - Redux Toolkit</h1>

            {/* Todo Input Form */}
            <div className="flex flex-col space-y-2">
                <div className="flex">
                    <input
                        type="text"
                        value={todoName}
                        onChange={handleOnChangeTodoName}
                        ref={todoNameRef}
                        placeholder="Add a new task..."
                        className="flex-1 border border-gray-300 p-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button
                        className="bg-blue-600 text-white font-bold py-2 px-4 rounded-r-md hover:bg-blue-700 transition duration-200"
                        onClick={handleAddTodo}
                    >
                        Add
                    </button>
                </div>

                {/* Priority Select */}
                <div className="flex items-center space-x-2">
                    <label className="text-sm font-medium text-gray-700">Priority:</label>
                    <select
                        value={priority}
                        onChange={handleOnChangePriority}
                        className="border border-gray-300 p-1 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default TodoForm;
