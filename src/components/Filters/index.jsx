import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import filtersSlice from './filtersSlice';

function Filters() {
    const [search, setSearch] = useState('');
    const [status, setStatus] = useState('All');
    const [filterPriorities, setfilterPriorities] = useState([]);
    const dispatch = useDispatch();

    const handleSearchTodo = (e) => {
        setSearch(e.target.value);
        dispatch(filtersSlice.actions.searchFilterChange(e.target.value));
    };

    const handleFilterStatus = (e) => {
        setStatus(e.target.value);
        dispatch(filtersSlice.actions.statusFilterChange(e.target.value));
    };

    const handlefilterPriorities = (e) => {
        setfilterPriorities((prev) => {
            if(prev.includes(e.target.value)) {
                return prev.filter((priority) => priority !== e.target.value)
            }
            return [...prev, e.target.value];
        });

        dispatch(filtersSlice.actions.prioritiesFilterChange(e.target.value));
    };

    return (
        <>
            <form>
                <div className="form-control">
                    <p>Search:</p>
                    <input
                        type="text"
                        id="search"
                        placeholder="Input Search Text"
                        value={search}
                        onChange={handleSearchTodo}
                    />
                </div>

                <div className="form-control">
                    <p>Filters for status:</p>

                    <label htmlFor="all">
                        <input
                            type="radio"
                            value="All"
                            id="all"
                            name="filters_status"
                            onChange={handleFilterStatus}
                            checked={status === 'All' ? true : false}
                        />
                        All
                    </label>

                    <label htmlFor="completed">
                        <input
                            type="radio"
                            value="Completed"
                            id="completed"
                            name="filters_status"
                            onChange={handleFilterStatus}
                            checked={status === 'Completed' ? true : false}
                        />
                        Completed
                    </label>

                    <label htmlFor="todo">
                        <input
                            type="radio"
                            value="Todo"
                            id="todo"
                            name="filters_status"
                            onChange={handleFilterStatus}
                            checked={status === 'Todo' ? true : false}
                        />
                        Todo
                    </label>
                </div>

                <div className="form-control">
                    <p>Filters by Priority:</p>

                    <label htmlFor="low">
                        <input
                            type="checkbox"
                            value="Low"
                            id="low"
                            name="filters_priority"
                            checked={filterPriorities.includes('Low')}
                            onChange={handlefilterPriorities}
                        />
                        Low
                    </label>

                    <label htmlFor="medium">
                        <input
                            type="checkbox"
                            value="Medium"
                            id="medium"
                            name="filters_priority"
                            checked={filterPriorities.includes('Medium')}
                            onChange={handlefilterPriorities}
                        />
                        Medium
                    </label>

                    <label htmlFor="high">
                        <input
                            type="checkbox"
                            value="High"
                            id="high"
                            name="filters_priority"
                            checked={filterPriorities.includes('High')}
                            onChange={handlefilterPriorities}
                        />
                        High
                    </label>
                </div>
            </form>
        </>
    );
}

export default Filters;