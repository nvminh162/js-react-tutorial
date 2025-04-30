import { createSlice } from "@reduxjs/toolkit";

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

/* 
(payload) => {
    return {
        type: 'filters/searchFilter',
        payload
    }    
}

{
    reducer,
    actions
}

action creator () => {
    type: 'filters/searchFilter',
    payload: value    
}
    
*/