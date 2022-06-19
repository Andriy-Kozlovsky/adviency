import {Button, Stack} from "@mui/material";
import {Container} from "@mui/system";
import {useSelector, useDispatch} from "react-redux";

import {listActions} from "./store/list";
import GiftList from "./components/List";
import Title from "./components/Title";
import FormModal from "./components/FormModal";
import Background from "./components/Background";
import useModal from "./hooks/use-modal";

export default function App() {
  const dispatch = useDispatch();
  const {openModal, closeModal} = useModal();
  const modalState = useSelector((state: any) => state.modal.open);

  const addGiftHandler = () => {
    openModal();
    listActions.clearEdit();
  };

  return (
    <Background>
      <Container maxWidth="sm">
        <Stack bgcolor="white" margin="0 auto" maxWidth="360px" padding={3} spacing={2}>
          <Title />
          <Button variant="contained" onClick={addGiftHandler}>
            Agregar regalo
          </Button>
          <GiftList />
          <Button variant="outlined" onClick={() => dispatch(listActions.clear())}>
            Borrar todo
          </Button>
        </Stack>
        <FormModal handleClose={closeModal} open={modalState} />
      </Container>
    </Background>
  );
};