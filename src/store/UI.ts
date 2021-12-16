import { createSlice } from "@reduxjs/toolkit";

export interface UIState {
  notification: string;
  loading: boolean;
}

const initialState: UIState = { notification: "", loading: false };

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    updateNotification: (state, action) => {
      state.notification = action.payload;
    },
    startLoading: (state) => {
      state.loading = true;
    },
    finishLoading: (state) => {
      state.loading = false;
    },
  },
});

export const { updateNotification, startLoading, finishLoading } = uiSlice.actions;

export default uiSlice.reducer;
