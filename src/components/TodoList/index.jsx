import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../redux/actions';
import { v4 as uuidv4 } from 'uuid';
import { todosRemaining } from '../../redux/selectors'
import Todo from '../Todo'

function TodoList() {
    const todoName = useRef();
    const priority = useRef();
    const dispatch = useDispatch();
    const todoList = useSelector(todosRemaining);

    const handleAddTodo = (e) => {
        e.preventDefault();
        dispatch(
            addTodo({
                id: uuidv4(),
                todoName: todoName.current.value,
                priority: priority.current.value,
                completed: false,
            })
        );
        todoName.current.value = '';
        priority.current.value = 'Medium';
    };

    return (
        <>
            <div className="list-todo">
                {todoList.map(({ id, todoName, priority, completed }) => (
                    <Todo key={id} id={id} name={todoName} priority={priority} completed={completed} />
                ))}
            </div>

            <br />

            <form
                className="add-todo"
                onSubmit={handleAddTodo}>
                <input
                    type="text"
                    placeholder="Add todo"
                    ref={todoName}
                />
                <select
                    defaultValue="Medium"
                    ref={priority}>
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
