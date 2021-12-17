import { useSelector } from "react-redux";
import { Note } from "../../models/note";
import { RootState } from "../../store";
import { useAppDispatch } from "../../store/hooks";
import { deleteNote, NotesState } from "../../store/notes";
import { closeModal, UIState } from "../../store/UI";
import Content from "../content/Content";
import DeleteModal from "../delete-modal/DeleteModal";
import EmptyState from "../empty-state/EmptyState";
import Header from "../header/Header";
import NotesList from "../notes-list/NotesList";
import styles from "./Layout.module.css";

const Layout: React.FC = (props) => {
  const notesState: NotesState = useSelector((state: RootState) => state.notes);
  const uiState: UIState = useSelector((state: RootState) => state.ui);
  const dispatch = useAppDispatch();

  const { items, selected } = notesState;
  const { modalOpen } = uiState;

  const selectedNote: Note | undefined = items.find(
    (item: Note) => item.id === selected
  );

  const modalCloseHandler = () => {
    dispatch(closeModal());
  };

  const modalConfirmHandler = () => {
    dispatch(deleteNote(selected!));
    dispatch(closeModal());
  };

  let content = <EmptyState />;
  if (items.length > 0) {
    content = (
      <div className={styles.wrapper}>
        <div className={styles.sidebar}>
          <NotesList items={items} selected={selected} />
        </div>
        <div className={styles.content}>
          {selectedNote && <Content note={selectedNote} />}
        </div>
      </div>
    );
  }

  return (
    <>
      <Header selected={selected} />
      {content}
      <DeleteModal
        open={modalOpen}
        closeHandler={modalCloseHandler}
        confirmHandler={modalConfirmHandler}
      />
    </>
  );
};

export default Layout;
