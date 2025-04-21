import TodoForm from './TodoForm/index';
import TodoFilter from './TodoFilter/index';
import TodoList from './TodoList/index';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchFilter } from '../redux/actions';

function TodoApp() {
    const dispatch = useDispatch();

    const [search, setSearch] = useState('');
    const handleSearchChange = (e) => {
        setSearch(e.target.value);
        dispatch(searchFilter(e.target.value))
    };

    return (
        <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Thêm thanh tìm kiếm */}
            <div className="px-4 py-3 bg-blue-50">
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </div>
                    <input
                        type="text"
                        value={search}
                        onChange={handleSearchChange}
                        placeholder="Search tasks..."
                        className="pl-10 w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>
            </div>
            <TodoForm />
            <TodoFilter />
            <TodoList />
        </div>
    );
}

export default TodoApp;
