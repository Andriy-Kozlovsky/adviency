import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {Button, Modal, Stack, TextField} from "@mui/material";
import {Box} from "@mui/system";

import useChangeHandler from "../hooks/use-form-handlers";
import {modalActions} from "../store/modal";
import {formActions} from "../store/form";
import {listActions} from "../store/list";

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
  const dispatch = useDispatch();
  const form = useSelector((state: any) => state.form);
  const itemToEdit = useSelector((state: any) => state.list.itemToEdit);
  const {changeName, changeGift, changeImage, changeAmount} = useChangeHandler();

  useEffect(() => {
    if (itemToEdit !== {}) dispatch(formActions.loadEditItem(itemToEdit));
  }, [itemToEdit, dispatch]);

  const saveHandler = () => {
    if (form.gift === "") return;
    dispatch(listActions.add(form));
    dispatch(modalActions.close());
    dispatch(formActions.resetValues());
    dispatch(listActions.clearEdit());
  };

  const closeHandler = () => {
    dispatch(modalActions.close());
    dispatch(formActions.resetValues());
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Stack noValidate autoComplete="off" component="form" spacing={1} sx={style}>
        <Stack direction="row">
          <TextField
            id="gift"
            label="Regalo"
            value={form.gift}
            variant="standard"
            onChange={changeGift}
          />
          <Button
            size="small"
            sx={{alignSelf: "flex-end"}}
            variant="outlined"
            onClick={() => dispatch(formActions.randomGift())}
          >
            Sorpréndeme!
          </Button>
        </Stack>
        <TextField
          id="name"
          label="Destinatario"
          value={form.name}
          variant="standard"
          onChange={changeName}
        />
        <TextField
          id="image"
          label="Imagen (URL)"
          value={form.image}
          variant="standard"
          onChange={changeImage}
        />
        <TextField
          id="amount"
          label="Cantidad"
          type="number"
          value={form.amount}
          variant="standard"
          onChange={changeAmount}
        />
        <Box display="flex" justifyContent="space-between" paddingTop={3}>
          <Button variant="outlined" onClick={closeHandler}>
            Cerrar
          </Button>
          <Button variant="contained" onClick={saveHandler}>
            Guardar
          </Button>
        </Box>
      </Stack>
    </Modal>
  );
};

export default FormModal;
