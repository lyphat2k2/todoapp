const initState = {
    search: '',
    status: 'All',
    priorities: [],
};

const filtersReducer = (state = initState, action) => {
    switch (action.type) {
        case 'filters/searchFilterChange':
            return {
                ...state,
                search: action.payload,
            };
            
        case 'filters/statusFilterChange':
            return {
                ...state,
                status: action.payload,
            };

        case 'filters/prioritiesFilterChange':
            return {
                ...state,
                priorities: state.priorities.includes(action.payload)
                    ? state.priorities.filter((priority) => priority !== action.payload)
                    : [...state.priorities, action.payload],
            };

        default:
            return state;
    }
};

export default filtersReducer;
