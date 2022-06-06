import React, {useState} from "react";

import "./styles.css";

export default function App() {
  const [list, setList] = useState<any>([]);

  function onAddItem(event: any) {
    event.preventDefault();
    setList([...list, event.target["text"].value]);
  }

  return (
    <div className="App">
      <div className="gifts">
        <h1>Regalos:</h1>
        <form onSubmit={onAddItem}>
          <input name="text" type="text" />
          <button type="submit">Agregar</button>
        </form>
        <ul>
          {list.map((item: any) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
