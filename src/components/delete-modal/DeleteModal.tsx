import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Backdrop, SxProps } from "@mui/material";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import styles from "./DeleteModal.module.css";

const style: SxProps = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: 3,
  boxShadow: 24,
  p: 4,
};

const DeleteModal: React.FC<{
  open: boolean;
  closeHandler: () => void;
  confirmHandler: () => void;
}> = (props) => {
  const { open, closeHandler, confirmHandler } = props;
  return (
    <Modal
      open={open}
      onClose={closeHandler}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h4"
            component="h2"
            align="center"
          >
            Delete note
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}
            align="center"
          >
            Are you sure you want to delete this note?
          </Typography>
          <div className={styles.actions}>
            <Button
              variant="contained"
              color="secondary"
              onClick={closeHandler}
            >
              Cancel
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={confirmHandler}
            >
              Confirm
            </Button>
          </div>
        </Box>
      </Fade>
    </Modal>
  );
};

export default DeleteModal;
