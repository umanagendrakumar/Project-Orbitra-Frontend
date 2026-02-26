import { createSlice } from "@reduxjs/toolkit";

const jobAppSlice = createSlice({
    name: 'jobApplications',
    initialState: [],
    reducers: {
        setJobApplications: (state, action) => {
            return action.payload;
        },
        updateJobApplication: (state, action) => {
            const index = state.findIndex(app => app.id === action.payload.id);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
        clearJobApplications: () => {
            return [];
        }
    }
});

export const { setJobApplications, updateJobApplication, clearJobApplications } = jobAppSlice.actions;
export default jobAppSlice.reducer;