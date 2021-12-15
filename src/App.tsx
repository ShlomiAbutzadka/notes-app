import React from "react";
import "./App.css";
import Notes from "./layout/Notes";
import { Note } from "./models/note";

function App() {
  const notes: Note[] = [
    { id: "1", text: "text1", lastSave: 2342423 },
    { id: "2", text: "text2", lastSave: 2342423 },
    { id: "3", text: "text3", lastSave: 2342423 },
    { id: "4", text: "text4", lastSave: 2342423 },
    { id: "5", text: "text5", lastSave: 2342423 },
    { id: "6", text: "text6", lastSave: 2342423 },
  ];
  return (
    <div className="App">
      <Notes notes={notes} />
    </div>
  );
}

export default App;
