import { configureStore } from "@reduxjs/toolkit";
import { filtersReducer } from "../components/Filters/filtersSlice";
import { todoReducer } from "../components/Todo/todoSlice";

const store = configureStore({
    reducer: {
        'filters': filtersReducer,
        'todoList': todoReducer
    }
})

export default store