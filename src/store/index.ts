import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { notesSlice } from "./notes";
import { uiSlice } from "./UI";

export const store = configureStore({
  reducer: {
    notes: notesSlice.reducer,
    ui: uiSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
