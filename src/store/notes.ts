import { createSlice } from "@reduxjs/toolkit";
import { Note } from "../models/note";
import { RootState } from "./index";

export interface NotesState {
  items: Note[];
  selected: Note | null;
}

const initialState: NotesState = {
  items: [],
  selected: null,
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.items.push(action.payload);
    },
    updateNote: (state, action) => {
      const { payload: updatedItem } = action;
      const itemIndex: number = state.items.findIndex(
        (item) => item.id === updatedItem.id
      );
      state.items[itemIndex] = updatedItem;
    },
    deleteNote: (state, action) => {
      const { payload: id } = action;
      state.items = state.items.filter((item) => item.id !== id);
    },
    selectNote: (state, action) => {
      state.selected = action.payload;
    },
  },
});

export const {
  addNote,
  updateNote,
  selectNote,
  deleteNote,
} = notesSlice.actions;

export const selectedNote = (state: RootState) => state.notes.selected;

export default notesSlice.reducer;
