import React, {useState} from "react";

import "./styles.css";

interface Item {
  text: string;
  amount: number;
}

export default function App() {
  const [list, setList] = useState<Item[]>([]);
  const [amount, setAmount] = useState<number>(1);
  const [inputVal, setInputVal] = useState<string>("");

  const onInputChange = (e: any) => {
    setInputVal(e.target.value);
  };

  const onAmountChange = (e: any) => {
    if (e.target.value < 1) return;
    setAmount(e.target.value);
  };

  const onFormSubmit = async (e: any) => {
    e.preventDefault();
    const filterRepeated = list.filter((item) => item.text === inputVal);

    if (inputVal === "" || filterRepeated.length > 0) return;
    await setList((prevList) => {
      return [...prevList, {text: e.target["text"].value, amount: e.target["amount"].value}];
    });
    setAmount(1);
    setInputVal("");
  };

  const onDeleteItem = (index: number) => {
    setList((prevList) => prevList.filter((item, _index) => index !== _index));
  };

  const onDeleteAllItems = () => {
    setList([]);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Regalos:</h1>
        <form onSubmit={onFormSubmit}>
          <input name="text" type="text" value={inputVal} onChange={(e) => onInputChange(e)} />
          <input
            className="amount"
            name="amount"
            type="number"
            value={amount}
            onChange={(e) => onAmountChange(e)}
          />
          <button type="submit">Agregar</button>
        </form>
        {list.length === 0 ? (
          <p>Agregá regalos!</p>
        ) : (
          <ul>
            {list.map((item, i) => (
              <li key={i}>
                {item.text} x{item.amount}
                <button onClick={() => onDeleteItem(i)}>X</button>
              </li>
            ))}
          </ul>
        )}
        <button onClick={() => onDeleteAllItems()}>Borrar todo</button>
      </div>
    </div>
  );
}
