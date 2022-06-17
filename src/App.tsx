import {useEffect, useState} from "react";

import Form from "./components/Form";
import List from "./components/List";
import {ListItems} from "./models";

import "./styles.css";

export default function App() {
  // @ts-ignore
  const [list, setList] = useState<ListItems[]>(JSON.parse(localStorage.getItem("list")));
  const [formOpened, setFormOpened] = useState(false);
  const [editIndex, setEditIndex] = useState<number>(-1);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const handleSubmit = (listItem: ListItems) => {
    if (editIndex >= 0) {
      setList((prevList) => {
        prevList[editIndex] = listItem;

        return prevList;
      });

      return;
    }
    setList([...list, listItem]);
  };

  const openForm = () => {
    setFormOpened((prevState) => !prevState);
  };

  const removeItem = (index: number) => {
    setList(list.filter((_, i) => i !== index));
  };

  const editIndexHandler = (i: number) => {
    setEditIndex(i);
    openForm();
  };

  const resetEditIndex = () => {
    setEditIndex(-1);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Regalos:</h1>
        <button className="btnPrimary" onClick={() => openForm()}>
          Agregar regalo
        </button>
        <List list={list} removeItem={removeItem} setEditIndex={editIndexHandler} />
        <button onClick={() => setList([])}>Borrar todo</button>
      </div>
      {formOpened && (
        <Form
          editIndex={editIndex}
          list={list}
          openForm={openForm}
          resetEditIndex={resetEditIndex}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
}
