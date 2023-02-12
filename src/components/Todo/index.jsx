import React from 'react';

function Todo({id, name, priority, completed }) {
    return (
        <div className="todo">
            <input
                type="checkbox"
                className="todo-status"
            />
            <span className="todo-name">{name}</span>
            <span className="todo-priority">{priority}</span>
        </div>
    );
}

export default Todo;