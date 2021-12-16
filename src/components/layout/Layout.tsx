import styles from "./Layout.module.css";
import Header from "../header/Header";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Note } from "../../models/note";
import Content from "../content/Content";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { NotesState, selectNote } from "../../store/notes";
import { useAppDispatch } from "../../store/hooks";

const Layout: React.FC = (props) => {
  const notesState: NotesState = useSelector((state: RootState) => state.notes);
  const dispatch = useAppDispatch();
  const { items, selected } = notesState;
  const selectedNote: Note | undefined = items.find(
    (item) => item.id === selected
  );

  const selectItemHandler = (id: string) => {
    dispatch(selectNote(id));
  };

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
          <List>
            {items.map((item) => {
              return (
                <ListItem key={item.id} disablePadding>
                  <ListItemButton
                    selected={selected === item.id}
                    onClick={() => selectItemHandler(item.id)}
                  >
                    <ListItemText primary={item.text || "(no text)"} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </div>
        <div className={styles.content}>
          {selectedNote && <Content note={selectedNote} />}
        </div>
      </div>
    </>
  );
};

export default Layout;
