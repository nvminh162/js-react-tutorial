import { SEARCH_FILTER, STATUS_FILTER, PRIORITY_FILTER } from '../../redux/constants';

const initState = {
    search: '',
    status: 'all',
    priority: [],
};

const todoFilterSlice = (state = initState, action) => {
    switch (action.type) {
        case SEARCH_FILTER:
            return { ...state, search: action.payload };
        case STATUS_FILTER:
            return { ...state, status: action.payload };
        case PRIORITY_FILTER:
            return { ...state, priority: action.payload };
        default:
            return state;
    }
};

export default todoFilterSlice;
