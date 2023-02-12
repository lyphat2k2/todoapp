import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
    name: 'filters',
    initialState: {
        search: '',
        status: 'All',
        priorities: [],
    },
    reducers: {
        searchFilterChange: (state, action) => {
            // return {
            //     ...state,
            //     search: action.payload
            // }

            // ----Writing with IMMER----
            state.search = action.payload;
        },
        statusFilterChange: (state, action) => {
            // return {
            //     ...state,
            //     status: action.payload
            // }

            // ----Writing with IMMER----
            state.status = action.payload;
        },
        prioritiesFilterChange: (state, action) => {
            // return {
            //     ...state,
            //     priorities: state.priorities.includes(action.payload)
            //         ? state.priorities.filter((priority) => priority !== action.payload)
            //         : [...state.priorities, action.payload],
            // };

            // ----Writing with IMME----
            state.priorities.includes(action.payload)
                ? state.priorities = state.priorities.filter((priority) => priority !== action.payload)
                : state.priorities = [...state.priorities, action.payload]
        },
    },
});
