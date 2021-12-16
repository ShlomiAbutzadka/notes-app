import styles from "./Content.module.css";
import { Note } from "../../models/note";

const Content: React.FC<{ note: Note }> = (props) => {
  const { note } = props;
  return <div className={styles.header}>{note.text}</div>;
};

export default Content;
