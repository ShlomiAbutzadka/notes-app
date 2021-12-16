import styles from "./Content.module.css";
import Button from "@mui/material/Button";
import { Note } from "../../models/note";

const Content: React.FC<{ selectedNote?: Note }> = (props) => {
  const { selectedNote } = props;
  if (!selectedNote) {
    return <p>"Please create a new note."</p>;
  }
  return <div className={styles.header}>{selectedNote.text}</div>;
};

export default Content;
