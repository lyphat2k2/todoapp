import React from 'react';

function Filters() {
    return (
        <>
            <form>
                <div className="form-control">
                    <p>Search:</p>
                    <input
                        type="text"
                        id="search"
                        placeholder="Input Search Text"
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
                            defaultChecked={true}
                        />
                        All
                    </label>

                    <label htmlFor="completed">
                        <input
                            type="radio"
                            value="Completed"
                            id="completed"
                            name="filters_status"
                        />
                        Completed
                    </label>

                    <label htmlFor="todo">
                        <input
                            type="radio"
                            value="Todo"
                            id="todo"
                            name="filters_status"
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
                        />
                        Low
                    </label>

                    <label htmlFor="medium">
                        <input
                            type="checkbox"
                            value="Medium"
                            id="medium"
                            name="filters_priority"
                        />
                        Medium
                    </label>

                    <label htmlFor="high">
                        <input
                            type="checkbox"
                            value="High"
                            id="high"
                            name="filters_priority"
                        />
                        High
                    </label>
                </div>
            </form>
        </>
    );
}

export default Filters;