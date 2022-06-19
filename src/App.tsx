import {Button, Stack} from "@mui/material";
import {Container} from "@mui/system";
import {useState} from "react";

import GiftList from "./components/List";
import Title from "./components/Title";
import FormModal from "./components/FormModal";
import Background from "./components/Background";

export default function App() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Background>
      <Container maxWidth="sm">
        <Stack bgcolor="white" margin="0 auto" maxWidth="360px" padding={3} spacing={2}>
          <Title />
          <Button variant="contained" onClick={handleOpen}>
            Agregar regalo
          </Button>
          <GiftList />
          <Button variant="outlined">Borrar todo</Button>
        </Stack>
        <FormModal handleClose={handleClose} open={open} />
      </Container>
    </Background>
  );
}
