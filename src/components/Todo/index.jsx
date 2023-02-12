import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleStatusTodo } from '../../redux/actions';

function Todo({id, name, priority, completed }) {
    const [checked, setChecked] = useState(completed);
    const dispatch = useDispatch();

    const handleCheckTodo = (e) => {
        setChecked(e.target.checked)
        dispatch(toggleStatusTodo(id))
    }

    return (
        <div className="todo">
            <input
                type="checkbox"
                className="todo-status"
                defaultChecked={checked}
                onChange={handleCheckTodo}
            />
            <span className="todo-name">{name}</span>
            <span className="todo-priority">{priority}</span>
        </div>
    );
}

export default Todo;