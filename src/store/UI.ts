import { createSlice } from "@reduxjs/toolkit";

export interface UIState {
  notification: string;
}

const initialState: UIState = { notification: "" };

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    updateNotification: (state, action) => {
      state.notification = action.payload;
    },
  },
});

export const { updateNotification } = uiSlice.actions;

export default uiSlice.reducer;
