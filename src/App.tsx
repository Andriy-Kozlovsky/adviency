import React, {useState, useEffect} from "react";

import Form from "./components/Form/Form";
import List from "./components/List/List";
import {ListItem} from "./models";

import "./styles.css";

export default function App() {
  const [openedModal, setOpendedModal] = useState<boolean>(false);
  // @ts-ignore
  const [list, setList] = useState<ListItem[]>(JSON.parse(localStorage.getItem("list")));

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const modalTrigger = () => {
    setOpendedModal((prevState) => !prevState);
  };

  const submitHandler = (item: ListItem): void => {
    setList((prevList) => [...prevList, item]);
  };

  const onRemoveItem = (index: number) => {
    setList((prevList) => prevList.filter((item, _index) => index !== _index));
  };

  const clearList = () => {
    setList([]);
  };

  return (
    <div className="App">
      <div className="container">
        <Form
          list={list}
          modalTrigger={modalTrigger}
          opened={openedModal}
          onSubmit={submitHandler}
        />
        <h1 onClick={() => modalTrigger()}>Regalos:</h1>
        <button className="btnPrimary" onClick={() => modalTrigger()}>
          Agregar regalo
        </button>
        <List list={list} onRemoveItem={onRemoveItem} />
        <button className="btnSecondary" onClick={() => clearList()}>
          Borrar todo
        </button>
      </div>
    </div>
  );
}
