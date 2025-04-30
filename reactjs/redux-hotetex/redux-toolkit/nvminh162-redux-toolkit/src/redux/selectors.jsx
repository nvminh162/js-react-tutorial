import { createSelector } from '@reduxjs/toolkit';

export const todoListSelector = (state) => state.todoList;

export const searchFilterSelector = (state) => state.filters.search;
export const statusFilterSelector = (state) => state.filters.status;
export const priorityFilterSelector = (state) => state.filters.priority;

export const todosRemainingSelector = createSelector(
    todoListSelector,
    searchFilterSelector,
    statusFilterSelector,
    priorityFilterSelector,
    (todoList, searchFilter, statusFilter, priorityFilter) => {
        return todoList.filter((todo) => {
            // Lọc theo search text
            const matchesSearch = todo.name.toLowerCase().includes(searchFilter.toLowerCase());
            
            // Lọc theo status
            let matchesStatus = true;
            if (statusFilter === 'completed') {
                matchesStatus = todo.completed;
            } else if (statusFilter === 'uncompleted') {
                matchesStatus = !todo.completed;
            }

            // Lọc theo priority
            let matchesPriority = true;
            if (priorityFilter.length > 0) {
                matchesPriority = priorityFilter.includes(todo.priority);
            }
            
            // Trả về true chỉ khi thỏa mãn cả 3 điều kiện
            return matchesSearch && matchesStatus && matchesPriority;
        });
    },
);
