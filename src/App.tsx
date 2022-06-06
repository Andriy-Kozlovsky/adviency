import React, {useState} from "react";

import "./styles.css";

export default function App() {
  const [list, setList] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  function onAddItemHandler(event: any) {
    event.preventDefault();
    setList((prevList) => [...prevList, inputValue]);
    setInputValue("");
  }

  function onChangeInputHandler(event: any) {
    setInputValue(event.target.value);
  }

  function onRemoveItemHandler(index: number) {
    setList((prevList) => {
      return prevList.filter((item, _index) => _index !== index);
    });
  }

  function deleteAllItemsHandler() {
    setList([]);
  }

  const renderListItems =
    list.length !== 0 ? (
      list.map((gift, index) => (
        <li key={index}>
          {gift}
          <button onClick={() => onRemoveItemHandler(index)}>X</button>
        </li>
      ))
    ) : (
      <p>No hay regalos grinch! Agregá algo!</p>
    );

  return (
    <div className="App">
      <div className="container">
        <h1>Regalos:</h1>
        <form onSubmit={onAddItemHandler}>
          <input name="gift" type="text" value={inputValue} onChange={onChangeInputHandler} />
          <button type="submit">Agregar</button>
        </form>
        <ul>{renderListItems}</ul>
        <button className="btn-borrar-todo" onClick={() => deleteAllItemsHandler()}>
          Borrar todo
        </button>
      </div>
    </div>
  );
}
