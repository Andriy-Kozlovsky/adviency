import React, {useState, useEffect} from "react";

import "./styles.css";

interface ListItem {
  text: string;
  amount: number;
}

export default function App() {
  // @ts-ignore
  const items = JSON.parse(localStorage.getItem("items"));

  const [list, setList] = useState<ListItem[]>(items);
  const [inputText, setInputText] = useState<string>("");
  const [inputAmount, setInputAmount] = useState<number>(1);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(list));
  }, [list]);

  const onFormSubmit = async (e: any) => {
    e.preventDefault();
    const filterRepeatedText = list.filter((item) => item.text === inputText);

    if (filterRepeatedText.length !== 0 || inputText === "") return;
    await setList((prevList) => [...prevList, {text: inputText, amount: inputAmount}]);

    setInputAmount(1);
    setInputText("");
  };

  const onChangeText = (e: any) => {
    setInputText(e.target.value);
  };

  const onChangeAmount = (e: any) => {
    const amount = e.target.value;

    if (amount < 1) return;
    setInputAmount(e.target.value);
  };

  const onRemoveItem = (i: number) => {
    setList((prevList) => prevList.filter((item, index) => index !== i));
    localStorage.setItem("items", JSON.stringify(list));
  };

  const onClearList = () => {
    setList([]);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Regalos:</h1>
        <form onSubmit={onFormSubmit}>
          <input name="text" type="text" value={inputText} onChange={(e) => onChangeText(e)} />
          <input
            className="amount"
            name="amount"
            type="number"
            value={inputAmount}
            onChange={(e) => onChangeAmount(e)}
          />
          <button type="submit">Agregar</button>
        </form>
        {list.length === 0 ? (
          <p>Agregá regalos!</p>
        ) : (
          <ul>
            {list.map((item, index) => (
              <li key={index}>
                {item.text} x{item.amount}
                <button onClick={() => onRemoveItem(index)}>X</button>
              </li>
            ))}
          </ul>
        )}
        <button onClick={() => onClearList()}>Borrar todo</button>
      </div>
    </div>
  );
}
