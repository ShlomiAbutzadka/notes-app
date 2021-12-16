import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useAppDispatch } from "../../store/hooks";
import { createNote, deleteNote } from "../../store/notes";
import { openModal, UIState } from "../../store/UI";
import styles from "./Header.module.css";

const Header: React.FC<{ selected?: string }> = (props) => {
  const uiState: UIState = useSelector((state: RootState) => state.ui);
  const dispatch = useAppDispatch();

  const { notification } = uiState;

  const newClickHandler = () => {
    dispatch(createNote());
  };

  const deleteClickHandler = () => {
      dispatch(openModal());
  };

  const { selected } = props;

  return (
    <>
      <div className={styles.header}>
        <div className={styles.title}>Notes</div>
        <div className={styles.notification}>{notification}</div>
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
