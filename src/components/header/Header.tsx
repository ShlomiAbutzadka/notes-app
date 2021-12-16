import styles from "./Header.module.css";
import Button from "@mui/material/Button";

const Header: React.FC = (props) => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.title}>Notes</div>
        <div className={styles.notification}>Last saved 3 seconds ago</div>
        <div className={styles.actions}>
          <Button variant="contained" color="secondary">New</Button>
          <Button variant="outlined" color="secondary">Delete</Button>
        </div>
      </div>
    </>
  );
};

export default Header;
