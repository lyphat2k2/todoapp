const initState = [
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
];

const todoReducer = (state = initState, action) => {
    switch (action.type) {
        case 'todoList/addTodo':
            return [...state, action.payload];

        case 'todoList/toggleStatusTodo':
            return state.map((todo) =>
                todo.id === action.payload
                    ? { ...todo, completed: !todo.completed }
                    : todo
            );

        default:
            return state;
    }
};

export default todoReducer;
