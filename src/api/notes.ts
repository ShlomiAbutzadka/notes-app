import { Note } from "../models/note";
import { v4 as uuidv4 } from "uuid";

const STORAGE_KEY = "notes";

const createNote = () => {
  return new Promise<{ note: Note }>(async (resolve) => {
    const id: string = uuidv4();
    const newNote: Note = { id, text: "" };
    const { notes } = await getNotes();
    notes.push(newNote);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
    resolve({ note: newNote });
  });
};

const getNotes = () => {
  return new Promise<{ notes: Note[] }>((resolve) => {
    const response = localStorage.getItem(STORAGE_KEY);
    if (!response) resolve({ notes: [] });
    const items: Note[] = JSON.parse(response!);
    resolve({ notes: items });
  });
};

const updateNote = (note: Note) => {
  return new Promise<{updated: Note}>(async (resolve) => {
    const { notes } = await getNotes();
    const index: number = notes.findIndex((item: Note) => item.id === note.id);
    const lastSave: number = new Date().getTime();
    const updated = {...note, lastSave };
    notes[index] = updated;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
    resolve({updated});
  });
};

const deleteNote = (id: string) => {
  return new Promise<void>(async (resolve) => {
    const { notes } = await getNotes();
    const filtered = notes.filter((note: Note) => note.id === id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
    resolve();
  });
};

export { createNote, getNotes, updateNote, deleteNote };
