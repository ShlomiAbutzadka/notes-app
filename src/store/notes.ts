import { createSlice } from "@reduxjs/toolkit";
import * as api from "../api/notes";
import { Note } from "../models/note";
import { AppDispatch, RootState } from "./index";
import { finishLoading, startLoading, updateNotification } from "./UI";

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
    loadNotes: (state, action) => {
      state.items = action.payload;
    },
    addNote: (state, action) => {
      state.items.push(action.payload);
      state.selected = action.payload.id;
    },
    saveNote: (state, action) => {
      const { payload: updatedItem } = action;
      const { selected } = state;
      if (!selected) return;
      const index = state.items.findIndex((item) => item.id === updatedItem.id);
      state.items[index] = updatedItem;
    },
    removeNote: (state, action) => {
      state.items = state.items.filter(
        (item, index) => item.id !== action.payload
      );
      state.selected = state.items.length ? state.items[0].id : undefined;
    },
    selectNote: (state, action) => {
      state.selected = action.payload;
    },
  },
});

export const getNotes = () => async (dispatch: AppDispatch) => {
  dispatch(startLoading());
  const { notes } = await api.getNotes();
  dispatch(loadNotes(notes));
  notes.length && dispatch(selectNote(notes[0].id))
  dispatch(finishLoading());
};

export const createNote = () => async (
  dispatch: AppDispatch
) => {
  const { note } = await api.createNote();
  dispatch(addNote(note));
};

export const deleteNote = (id: string) => async (
  dispatch: AppDispatch
) => {
    dispatch(updateNotification('Note deleted...'));
  await api.deleteNote(id);
  dispatch(removeNote(id));
  dispatch(updateNotification(''));
};

export const updateNote = (note: Note) => async (
  dispatch: AppDispatch
) => {
  const {updated} = await api.updateNote(note);
  dispatch(saveNote(updated));
};

export const {
  addNote,
  saveNote,
  selectNote,
  removeNote,
  loadNotes,
} = notesSlice.actions;

export const selectedNote = (state: RootState) => state.notes.selected;

export default notesSlice.reducer;
