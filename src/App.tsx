import React, {useState} from "react";

import "./styles.css";

export default function App() {
  const [list, setList] = useState<string[]>([]);

  function onAddGift(event: any) {
    event.preventDefault();
    setList([...list, event.target["gift"].value]);
    event.target["gift"].value = "";
  }

  function onRemoveGift(i: number) {
    setList((prevList) => {
      return prevList.filter((item, index) => index !== i);
    });
  }

  return (
    <div className="App">
      <div className="container">
        <h1>Regalos:</h1>
        <form onSubmit={onAddGift}>
          <input name="gift" type="text" />
          <button type="submit">Agregar</button>
        </form>
        <ul>
          {list.map((item, i) => (
            <li key={i}>
              {item}
              <button onClick={() => onRemoveGift(i)}>X</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
