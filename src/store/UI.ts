import { createSlice } from "@reduxjs/toolkit";

export interface UIState {
  notification: string;
  loading: boolean;
  modalOpen: boolean;
}

const initialState: UIState = {
  notification: "",
  loading: false,
  modalOpen: false,
};

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
    openModal: (state) => {
      state.modalOpen = true;
    },
    closeModal: (state) => {
      state.modalOpen = false;
    },
  },
});

export const {
  updateNotification,
  startLoading,
  finishLoading,
  openModal,
  closeModal,
} = uiSlice.actions;

export default uiSlice.reducer;
