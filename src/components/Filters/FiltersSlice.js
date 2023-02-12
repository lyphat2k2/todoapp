import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
    name: 'filters',
    initialState: {
        search: "",
        status: "All",
        priorities: []
    },
    reducers: {
        searchFilterChange: (state, action) => {
            return state.search = action.payload
        },
        statusFilterChange: (state, action) => {
            return state.status = action.payload
        },
        prioritiesFilterChange: (state, action) => {
            return priorities = state.priorities.includes(action.payload)
                    ? state.priorities.filter((priority) => priority !== action.payload)
                    : [...state.priorities, action.payload]
        }
    }
})