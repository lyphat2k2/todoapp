import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
    name: 'todoList',
    initialState: [
        {
            id: 1,
            todoName: 'Buy milk',
            priority: 'Medium',
            completed: false,
        },
        {
            id: 2,
            todoName: 'Write a report',
            priority: 'High',
            completed: false,
        },
        {
            id: 3,
            todoName: 'Go for a walk',
            priority: 'Low',
            completed: true,
        },
    ],
    reducers: {
        addTodo: (state, action) => {
            return state.push(action.payload);
        },
        toggleStatusTodo: (state, action) => {
            const currentTodo = state.filter(
                (todo) => todo.id === action.payload
            );
            currentTodo.completed = !currentTodo.completed;
        },
    },
});
