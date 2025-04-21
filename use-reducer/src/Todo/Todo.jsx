import { useReducer, useRef } from 'react';
import reducer, { initState } from './reducer'
import { setField, addTodo, deleteTodo } from './actions'

function Todo() {
    const [state, dispatch] = useReducer(reducer, initState);

    const { field, todos } = state;

    const fieldRef = useRef();

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">ToDo App Of Nguyen Van Minh</h3>

            <div className="flex mb-4 gap-2">
                <input
                    value={field}
                    onChange={(e) => dispatch(setField(e.target.value))}
                    ref={fieldRef}
                    className="flex-1 border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter todo name..."
                />
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
                    onClick={() => {
                        dispatch(addTodo(field));
                        dispatch(setField(''));
                        fieldRef.current.focus();
                    }}
                >
                    Add
                </button>
            </div>

            <ul className="space-y-2">
                {todos.map((todo, index) => (
                    <li
                        key={index}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-md hover:bg-gray-100"
                    >
                        <span>{todo}</span>
                        <button
                            className="text-red-500 hover:text-red-700"
                            onClick={() => {
                                dispatch(deleteTodo(index));
                                fieldRef.current.focus();
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                />
                            </svg>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todo;