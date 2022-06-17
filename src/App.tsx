import {useState, useEffect} from "react";

import {Item} from "./models";
import Form from "./components/Form/Form";
import List from "./components/List/List";

import "./styles.css";

const initialState = {
  text: "",
  name: "",
  image: "",
  amount: 1,
  id: 0,
};

export default function App() {
  // @ts-ignore
  const [list, setList] = useState<Item[]>(JSON.parse(localStorage.getItem("list")));
  const [openedForm, setOpenedForm] = useState(false);
  const [itemToEdit, setItemToEdit] = useState<Item>(initialState);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const submitHandler = (formItem: Item) => {
    const filterRepeated = list.filter((item) => item.text === formItem.text);

    if (filterRepeated.length > 0 || formItem.text === "") return;

    if (itemToEdit !== initialState) {
      setList((prevList) => {
        const newList = prevList.map((listItem) => {
          if (listItem.id === itemToEdit.id) {
            listItem = formItem;

            return listItem;
          }

          return listItem;
        });

        return newList;
      });
    } else {
      setList((prevList) => [...prevList, formItem]);
    }
    formHandler(false);
  };

  const formHandler = (state: boolean) => {
    if (!state) setItemToEdit(initialState);
    setOpenedForm(state);
  };

  const removeItemHandler = (id: number) => {
    setList((prevList) => prevList.filter((item) => item.id !== id));
  };

  const editItemHandler = (id: number) => {
    formHandler(true);
    const [newItem] = list.filter((item) => item.id === id);

    setItemToEdit(newItem);
  };

  const clearList = () => {
    setList([]);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Regalos:</h1>
        <button className="btn-primary" onClick={() => formHandler(true)}>
          Agregar regalo
        </button>
        {openedForm && (
          <Form closeForm={formHandler} itemToEdit={itemToEdit} onSubmit={submitHandler} />
        )}
        <List editItem={editItemHandler} list={list} removeItem={removeItemHandler} />
        <button onClick={() => clearList()}>Borrar todo</button>
      </div>
    </div>
  );
}
