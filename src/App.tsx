import {useState} from "react";

import Form from "./components/Form/Form";
import List from "./components/List/List";
import {ListItem} from "./models";
import "./styles.css";

export default function App() {
  const [openedForm, setOpenedForm] = useState(false);
  const [list, setList] = useState<ListItem[]>([]);

  const getObjHandler = (obj: ListItem) => {
    setList((prevList) => [...prevList, obj]);
  };

  return (
    <div className="app">
      <h1>Regalos:</h1>
      <button className="btn-primary" onClick={() => setOpenedForm(!openedForm)}>
        Agregar regalo
      </button>
      <List list={list} />
      {openedForm && <Form sendObj={getObjHandler} />}
    </div>
  );
}
