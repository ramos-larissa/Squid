import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import "./styles.css";

export default function AlertDialog(data) {
  const [open, setOpen] = React.useState(false);

  const body = data.data;

  const handleClickOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        <MoreHorizIcon size="large" />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Mais sobre:"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <h4>Legenda:</h4>
            {body?.legenda}
            <br />
            {body?.tags.map((item, index) => {
              return (
                <strong key={index} className="tag">
                  &nbsp;#{item}&nbsp;
                </strong>
              );
            })}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>OK</Button>
          <Button href={body?.link} target="_blank">
            Ir para o Instagram
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
