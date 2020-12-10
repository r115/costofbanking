import { createSlice } from '@reduxjs/toolkit';

export const bankSlice = createSlice({
    name: 'banks',
    initialState: {
        bankList: [],
    },
    reducers: {
        setBankList: (state, action) => {
            state.bankList = action.payload;
        }
    },
});

export const {
    setBankList,
} = bankSlice.actions;

export default bankSlice.reducer;
