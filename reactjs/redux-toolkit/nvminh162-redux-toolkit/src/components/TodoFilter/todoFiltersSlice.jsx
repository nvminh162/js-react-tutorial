// Core
/* import { SEARCH_FILTER, STATUS_FILTER, PRIORITY_FILTER } from '../../redux/constants';

const initState = {
    search: '',
    status: 'all',
    priority: [],
};

const todoFilterReducer = (state = initState, action) => {
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

export default todoFilterReducer;
 */

import { createSlice } from "@reduxjs/toolkit";

// Toolkit

export const todoFilterSlice = createSlice({
    name: 'filters',
    initialState: {
        search: '',
        status: 'all',
        priority: []
    },
    reducers: {
        searchFilter: (state, action) => { //=> { type: 'filters/searchFilter' }
            state.search = action.payload
        },
        statusFilter: (state, action) => { //=> { type: 'filters/statusFilter' }
            state.status = action.payload
        },
        priorityFilter: (state, action) => { //=> { type: 'filters/priorityFilter' }
            state.priority = action.payload
        },
    }
});