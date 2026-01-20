import { configureStore } from "@reduxjs/toolkit";
import { reportApi } from "./features/reports";

export const store = configureStore({
  reducer: {
    [reportApi.reducerPath]: reportApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(reportApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
