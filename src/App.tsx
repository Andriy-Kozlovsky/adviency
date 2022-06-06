import React, {useState} from "react";

import "./styles.css";

export default function App() {
  const [list, setList] = useState<string[]>([]);

  async function onSubmitGiftHandler(event: any) {
    event.preventDefault();
    await setList((prevList) => [...prevList, event.target["gift"].value]);
    event.target["gift"].value = "";
  }

  function onRemoveGiftHandler(index: number) {
    setList((prevList) => {
      return prevList.filter((gift, i) => i !== index);
    });
  }

  function onRemoveAllGiftsHandler() {
    setList([]);
  }

  return (
    <div className="App">
      <div className="container">
        <h1>Regalos:</h1>
        <form onSubmit={onSubmitGiftHandler}>
          <input name="gift" type="text" />
          <button type="submit">Agregar</button>
        </form>
        <ul>
          {list.map((gift, index) => (
            <li key={index}>
              {gift}
              <button onClick={() => onRemoveGiftHandler(index)}>X</button>
            </li>
          ))}
        </ul>
        <button className="borrar-todo-btn" onClick={() => onRemoveAllGiftsHandler()}>
          Borrar todo
        </button>
      </div>
    </div>
  );
}
