import React, { useRef } from 'react';
import Todo from '../Todo'
import todoList from '../../data/todo.json'

function TodoList() {
    return (
        <>
            <div className="list-todo">
                {todoList.map(({ id, todoName, priority, completed }) => (
                    <Todo key={id} id={id} name={todoName} priority={priority} completed={completed} />
                ))}
            </div>

            <br />

            <form className="add-todo">
                <input
                    type="text"
                    placeholder="Add todo"
                />
                <select defaultValue="Medium">
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
                <button>Submit</button>
            </form>
        </>
    );
}

export default TodoList;
