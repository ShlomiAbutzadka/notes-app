import Button from "@mui/material/Button";
import { useAppDispatch } from "../../store/hooks";
import { addNote, deleteNote } from "../../store/notes";
import styles from "./Header.module.css";

const Header: React.FC<{ selected?: string }> = (props) => {
  const dispatch = useAppDispatch();

  const newClickHandler = () => {
    dispatch(addNote());
  };

  const deleteClickHandler = () => {
    dispatch(deleteNote());
  };

  const { selected } = props;

  return (
    <>
      <div className={styles.header}>
        <div className={styles.title}>Notes</div>
        <div className={styles.notification}>Last saved 3 seconds ago</div>
        <div className={styles.actions}>
          <Button
            variant="contained"
            color="secondary"
            onClick={newClickHandler}
          >
            New
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            disabled={!selected}
            onClick={deleteClickHandler}
          >
            Delete
          </Button>
        </div>
      </div>
    </>
  );
};

export default Header;
