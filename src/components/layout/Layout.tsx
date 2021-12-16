import { useSelector } from "react-redux";
import { Note } from "../../models/note";
import { RootState } from "../../store";
import { NotesState } from "../../store/notes";
import Content from "../content/Content";
import Header from "../header/Header";
import NotesList from "../notes-list/NotesList";
import styles from "./Layout.module.css";

const Layout: React.FC = (props) => {
  const notesState: NotesState = useSelector((state: RootState) => state.notes);

  const { items, selected } = notesState;
  const selectedNote: Note | undefined = items.find(
    (item: Note) => item.id === selected
  );

  if (!items.length)
    return (
      <>
        <Header selected={selected} />
        <div className={styles.empty}>Please create a new note.</div>
      </>
    );
  return (
    <>
      <Header selected={selected} />
      <div className={styles.wrapper}>
        <div className={styles.sidebar}>
          <NotesList items={items} selected={selected} />
        </div>
        <div className={styles.content}>
          {selectedNote && <Content note={selectedNote} />}
        </div>
      </div>
    </>
  );
};

export default Layout;
