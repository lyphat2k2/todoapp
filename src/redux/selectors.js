import { createSelector } from '@reduxjs/toolkit';

export const todoListSelector = (state) => state.todoList;
export const searchTextSelector = (state) => state.filters.search;
export const filterStatusSelector = (state) => state.filters.status;
export const filterPrioritiesSelector = (state) => state.filters.priorities;

export const todosRemaining = createSelector(
    todoListSelector,
    searchTextSelector,
    filterStatusSelector,
    filterPrioritiesSelector,
    (todoList, searchText, status, priorities) => {
        return todoList.filter((todo) => {
            if (status === 'All') {
                return priorities.length
                    ? todo.todoName.includes(searchText) &&
                          priorities.includes(todo.priority)
                    : todo.todoName.includes(searchText);
            }

            return priorities.length
                ? todo.todoName.includes(searchText) &&
                      (status === 'Completed'
                          ? todo.completed
                          : !todo.completed) &&
                      priorities.includes(todo.priority)
                : todo.todoName.includes(searchText) &&
                      (status === 'Completed'
                          ? todo.completed
                          : !todo.completed);
        });
    }
);
