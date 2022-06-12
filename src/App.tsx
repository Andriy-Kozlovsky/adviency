import React, {useState, useEffect} from "react";

import "./styles.css";

interface ListItem {
  text: string;
  amount: number;
  image: string;
}

export default function App() {
  // @ts-ignore
  const [list, setList] = useState<ListItem[]>(JSON.parse(localStorage.getItem("items")));
  const [textValue, setTextValue] = useState<string>("");
  const [amountValue, setAmountValue] = useState<number>(1);
  const [imagePath, setImagePath] = useState<string>("");

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(list));
  }, [list]);

  const onFormSubmit = async (e: any) => {
    e.preventDefault();
    const filterRepeated = list.filter((item) => item.text === textValue);

    if (filterRepeated.length !== 0 || textValue === "") return;

    await setList((prevList) => [
      ...prevList,
      {text: textValue, amount: amountValue, image: imagePath},
    ]);

    setTextValue("");
    setAmountValue(1);
    setImagePath("");
  };

  const onRemoveItem = (i: number) => {
    setList((prevList) => prevList.filter((item, index) => index !== i));
  };

  const onRemoveAllItems = () => {
    setList([]);
  };

  const onTextChange = (e: any) => {
    setTextValue(e.target.value);
  };

  const onAmountChange = (e: any) => {
    setAmountValue(e.target.value);
  };

  const onImagePathChange = (e: any) => {
    setImagePath(e.target.value);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Regalos:</h1>
        <form onSubmit={onFormSubmit}>
          <input name="text" type="text" value={textValue} onChange={(e) => onTextChange(e)} />
          <input
            name="image"
            type="text"
            value={imagePath}
            onChange={(e) => onImagePathChange(e)}
          />
          <input
            className="amount"
            name="amount"
            type="number"
            value={amountValue}
            onChange={(e) => onAmountChange(e)}
          />
          <button type="submit">Agregar</button>
        </form>
        {list.length === 0 ? (
          <p>Agregá regalos!</p>
        ) : (
          <ul>
            {list.map((item, index) => (
              <li key={index}>
                <img alt="" src={item.image} />
                {item.text} x{item.amount}
                <button className="closeBtn" onClick={() => onRemoveItem(index)}>
                  X
                </button>
              </li>
            ))}
          </ul>
        )}
        <button onClick={() => onRemoveAllItems()}>Borrar todo</button>
      </div>
    </div>
  );
}
