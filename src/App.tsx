import React from "react";
import "./App.css";
import Layout from "./components/layout/Layout";
import { Note } from "./models/note";

function App() {
  const notes: Note[] = [
    { id: "1", text: "text1text1text1text1text1text1", lastSave: 2342423 },
    { id: "2", text: "text2", lastSave: 2342423 },
    { id: "3", text: "text3text3text3", lastSave: 2342423 },
    { id: "4", text: "text4", lastSave: 2342423 },
    { id: "5", text: "text5text5text5text5text5", lastSave: 2342423 },
    { id: "6", text: "text6text6", lastSave: 2342423 },
    { id: "7", text: "text7text7text7text7text7text7", lastSave: 2342423 },
    { id: "8", text: "text6text6text6", lastSave: 2342423 },
    { id: "9", text: "text9text9text9", lastSave: 2342423 },
    { id: "10", text: "text10text10text10text10text10", lastSave: 2342423 },
  ];

  const selectedNote: Note = notes[0];
  return (
    <div className="App">
      <Layout items={notes} selected={selectedNote}/>
    </div>
  );
}

export default App;
