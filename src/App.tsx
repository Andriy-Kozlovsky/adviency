import React, {useEffect} from "react";

import useForm from "./hooks/use-form";
import Form from "./components/Form/Form";
import List from "./components/List/List";

import "./globalStyles.css";

export default function App() {
  const [
    list,
    inputText,
    inputAmount,
    inputImage,
    onFormSubmit,
    onTextChange,
    onAmountChange,
    onImageChange,
    onRemoveItem,
    onRemoveAllItems,
    openForm,
    openFormHandler,
  ] = useForm();

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <div className="App">
      <div className="container">
        <h1>Regalos:</h1>
        <button className="btnAction" onClick={openFormHandler}>
          Agregar regalo
        </button>
        <Form
          inputAmount={inputAmount}
          inputImage={inputImage}
          inputText={inputText}
          openForm={openForm}
          openFormHandler={openFormHandler}
          onAmountChange={onAmountChange}
          onFormSubmit={onFormSubmit}
          onImageChange={onImageChange}
          onTextChange={onTextChange}
        />
        <List list={list} onRemoveAllItems={onRemoveAllItems} onRemoveItem={onRemoveItem} />
      </div>
    </div>
  );
}
