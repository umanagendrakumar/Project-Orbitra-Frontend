import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import jobApplicationsReducer from "./jobAppSlice";
import StatusHistoryReducer from "./StatusHistorySlice";

export const appStore = configureStore({
    reducer: {
        user: userReducer,
        jobApplications : jobApplicationsReducer,
        statusHistory: StatusHistoryReducer
    }
});
