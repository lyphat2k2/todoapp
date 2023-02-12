// import { legacy_createStore as createStore } from 'redux'
// import rootReducer from './reducer'
// import { composeWithDevTools } from 'redux-devtools-extension'

// const composedEnhancers = composeWithDevTools()

// const store = createStore(rootReducer, composedEnhancers)

// export default store

import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "../components/Filters/filtersSlice";
import todoReducer from "../components/Todo/todoSlice";

const store = configureStore({
    reducer: {
        filters: ,
        todoList: 
    }
})

export default store