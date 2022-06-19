import {Button, Modal, Stack, TextField} from "@mui/material";
import {Box} from "@mui/system";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "white",
  p: 4,
};

const FormModal = ({open, handleClose}: {open: boolean; handleClose: () => void}) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Stack noValidate autoComplete="off" component="form" spacing={1} sx={style}>
        <TextField id="gift" label="Regalo" variant="standard" />
        <TextField id="name" label="Destinatario" variant="standard" />
        <TextField id="image" label="Imagen (URL)" variant="standard" />
        <TextField id="amount" label="Cantidad" variant="standard" />
        <Box display="flex" justifyContent="space-between" paddingTop={3}>
          <Button variant="outlined">Cerrar</Button>
          <Button variant="contained">Guardar</Button>
        </Box>
      </Stack>
    </Modal>
  );
};

export default FormModal;
