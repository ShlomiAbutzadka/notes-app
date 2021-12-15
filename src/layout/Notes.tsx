import { Note } from "../models/note";

const Notes: React.FC<{ notes: Note[] }> = (props) => {
  return (
    <>
      <div className="notes-layout">
        <div className="list">
          {props.notes.map((note: Note) => {
            return <p>{note.text}</p>;
          })}
        </div>
        <div className="content">“Please create a new note”.</div>
      </div>
    </>
  );
};

export default Notes;
