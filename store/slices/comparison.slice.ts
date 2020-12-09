import { createSlice } from '@reduxjs/toolkit';

export const comparisonSlice = createSlice({
    name: 'comparison',
    initialState: {
        transaction: null,
    },
    reducers: {
        setTransaction: (state, action) => {
            state.transaction = action.payload;
        }
    },
});

export const {
    setTransaction,
} = comparisonSlice.actions;

export default comparisonSlice.reducer;
