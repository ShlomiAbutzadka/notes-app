import { createSlice } from "@reduxjs/toolkit";
import { Note } from "../models/note";
import { RootState } from "./index";
import { v4 as uuidv4 } from "uuid";

export interface NotesState {
  items: Note[];
  selected?: string;
}

const initialState: NotesState = {
  items: [],
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state) => {
      const id: string = uuidv4();
      const newNote: Note = { id, text: "" };
      state.items.push(newNote);
      state.selected = id;
    },
    updateNote: (state, action) => {
      const { payload: updatedItem } = action;
      const { selected } = state;
      if (!selected) return;
    },
    deleteNote: (state) => {
      state.items = state.items.filter(
        (item, index) => item.id !== state.selected
      );
      state.selected = state.items.length ? state.items[0].id : undefined;
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
