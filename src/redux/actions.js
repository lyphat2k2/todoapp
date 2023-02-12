export const addTodo = (data) => {
    return {
        type: 'todoList/addTodo',
        payload: data
    }
}

export const toggleStatusTodo = (todoId) => {
    return {
        type: 'todoList/toggleStatusTodo',
        payload: todoId
    }
}

export const searchFilterChange = (text) => {
    return {
        type: 'filters/searchFilterChange',
        payload: text
    }
}

export const statusFilterChange = (option) => {
    return {
        type: 'filters/statusFilterChange',
        payload: option
    }
}

export const prioritiesFilterChange = (properties) => {
    return {
        type: 'filters/prioritiesFilterChange',
        payload: properties
    }
}