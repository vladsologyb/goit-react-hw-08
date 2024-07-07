import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
    name: 'filters',
    initialState: {
        name: ''
    },
    reducers: {
        search: (state, action) => {
            state.name = action.payload;
        }
    }
})

export default filterSlice.reducer;
export const selectTextFilter = state => state.filter.name;
export const { search } = filterSlice.actions;