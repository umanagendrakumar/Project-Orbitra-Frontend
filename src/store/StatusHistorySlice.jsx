import { createSlice } from "@reduxjs/toolkit";

const StatusHistorySlice = createSlice({
    name: "statusHistory",
    initialState: [],
    reducers: {
        setStatusHistory: (state, action) => {
            return action.payload;
        },
    },
});

export const { setStatusHistory } = StatusHistorySlice.actions;
export default StatusHistorySlice.reducer;