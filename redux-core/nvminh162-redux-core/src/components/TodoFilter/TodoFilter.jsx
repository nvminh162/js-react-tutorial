import React from 'react';

function TodoFilterComponent() {
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
              defaultChecked
              className="form-radio h-4 w-4 text-blue-600"
            />
            <span className="ml-2 text-sm text-gray-700">All</span>
          </label>
          <label className="inline-flex items-center">
            <input 
              type="radio" 
              name="status"
              className="form-radio h-4 w-4 text-blue-600"
            />
            <span className="ml-2 text-sm text-gray-700">Completed</span>
          </label>
          <label className="inline-flex items-center">
            <input 
              type="radio" 
              name="status"
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
            className="form-checkbox h-4 w-4 text-red-600"
          />
          <span className="ml-2 text-sm text-gray-700">High</span>
        </label>
        <label className="inline-flex items-center">
          <input 
            type="checkbox" 
            className="form-checkbox h-4 w-4 text-yellow-500"
          />
          <span className="ml-2 text-sm text-gray-700">Medium</span>
        </label>
        <label className="inline-flex items-center">
          <input 
            type="checkbox" 
            className="form-checkbox h-4 w-4 text-green-500"
          />
          <span className="ml-2 text-sm text-gray-700">Low</span>
        </label>
      </div>
    </div>
  );
}

export default TodoFilterComponent;