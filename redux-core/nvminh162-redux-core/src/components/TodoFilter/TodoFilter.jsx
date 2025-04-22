import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { statusFilter, priorityFilter } from '../../redux/actions';

function TodoFilter() {
  const [status, setStatus] = useState('all');
  const [priorities, setPriorities] = useState([]);
  const dispatch = useDispatch();

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
    dispatch(statusFilter(e.target.value));
  };

  const handlePriorityChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    
    let newPriorities;
    if (isChecked) {
      newPriorities = [...priorities, value];
    } else {
      newPriorities = priorities.filter(priority => priority !== value);
    }
    
    setPriorities(newPriorities);
    dispatch(priorityFilter(newPriorities));
  };

  return (
    <div className="px-4 py-3 bg-gray-100 border-t border-b border-gray-200">
      {/* Filter by status - Radio buttons */}
      <div className="mb-3">
        <h3 className="text-sm font-semibold text-gray-700 mb-2">Filter By Status:</h3>
        <div className="flex space-x-4">
          <label className="inline-flex items-center">
            <input 
              type="radio" 
              name="status"
              value="all"
              checked={status === 'all'}
              onChange={handleStatusChange}
              className="form-radio h-4 w-4 text-blue-600"
            />
            <span className="ml-2 text-sm text-gray-700">All</span>
          </label>
          <label className="inline-flex items-center">
            <input 
              type="radio" 
              name="status"
              value="completed"
              checked={status === 'completed'}
              onChange={handleStatusChange}
              className="form-radio h-4 w-4 text-blue-600"
            />
            <span className="ml-2 text-sm text-gray-700">Completed</span>
          </label>
          <label className="inline-flex items-center">
            <input 
              type="radio" 
              name="status"
              value="uncompleted"
              checked={status === 'uncompleted'}
              onChange={handleStatusChange}
              className="form-radio h-4 w-4 text-blue-600"
            />
            <span className="ml-2 text-sm text-gray-700">Uncompleted</span>
          </label>
        </div>
      </div>

      {/* Filter by priority - Checkboxes */}
      <h3 className="text-sm font-semibold text-gray-700 mb-2">Filter By Priority:</h3>
      <div className="flex space-x-4">
        <label className="inline-flex items-center">
          <input 
            type="checkbox" 
            value="high"
            checked={priorities.includes('high')}
            onChange={handlePriorityChange}
            className="form-checkbox h-4 w-4 text-red-600"
          />
          <span className="ml-2 text-sm text-gray-700">High</span>
        </label>
        <label className="inline-flex items-center">
          <input 
            type="checkbox" 
            value="medium"
            checked={priorities.includes('medium')}
            onChange={handlePriorityChange}
            className="form-checkbox h-4 w-4 text-yellow-500"
          />
          <span className="ml-2 text-sm text-gray-700">Medium</span>
        </label>
        <label className="inline-flex items-center">
          <input 
            type="checkbox" 
            value="low"
            checked={priorities.includes('low')}
            onChange={handlePriorityChange}
            className="form-checkbox h-4 w-4 text-green-500"
          />
          <span className="ml-2 text-sm text-gray-700">Low</span>
        </label>
      </div>
    </div>
  );
}

export default TodoFilter;