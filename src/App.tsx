import React, {useState} from "react";

import "./styles.css";

export default function App() {
  const [list, setList] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  function onChangeInputHandler(e: any) {
    setInputValue(e.target.value);
  }

  async function onSubmitHandler(e: any) {
    e.preventDefault();
    const value = e.target["gift"].value;
    const filterRepeatedValue = list.filter((item) => item === value);

    if (value === "" || filterRepeatedValue.length !== 0) return;

    await setList((prevList) => [...prevList, value]);
    setInputValue("");
  }

  function onRemoveItemHandler(index: number) {
    setList((prevList) => prevList.filter((item, _index) => index !== _index));
  }

  function onRemoveAllHanlder() {
    setList([]);
  }

  return (
    <div className="App">
      <div className="container">
        <h1>Regalos:</h1>
        <form onSubmit={onSubmitHandler}>
          <input
            name="gift"
            type="text"
            value={inputValue}
            onChange={(e) => onChangeInputHandler(e)}
          />
          <button type="submit">Agregar</button>
        </form>
        {list.length === 0 ? (
          <p>Agregá regalos!</p>
        ) : (
          <ul>
            {list.map((item, index) => (
              <li key={index}>
                {item}
                <button onClick={() => onRemoveItemHandler(index)}>X</button>
              </li>
            ))}
          </ul>
        )}
        <button onClick={() => onRemoveAllHanlder()}>Borrar todo</button>
      </div>
    </div>
  );
}
