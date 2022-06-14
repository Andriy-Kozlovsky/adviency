import React, {ChangeEvent, useState} from "react";

import {ListItem} from "../../models";

import styles from "./Form.module.css";

const Form = ({
  onSubmit,
  opened,
  list,
  modalTrigger,
}: {
  onSubmit: (item: ListItem) => void;
  opened: boolean;
  list: ListItem[];
  modalTrigger: () => void;
}) => {
  const [textValue, setTextValue] = useState<string>("");
  const [nameValue, setNameValue] = useState<string>("");
  const [imageValue, setImageValue] = useState<string>("");
  const [amountValue, setAmountValue] = useState<number>(1);

  if (!opened) return null;

  const onTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTextValue(e.target.value);
  };

  const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNameValue(e.target.value);
  };

  const onImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    setImageValue(e.target.value);
  };

  const onAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAmountValue(Number(e.target.value));
  };

  const onFormSubmit = async (e: any) => {
    e.preventDefault();

    const filterRepeated = list.filter((item) => item.text === textValue);

    if (filterRepeated.length > 0 || textValue === "") return;

    const submitItem = {
      text: textValue,
      name: nameValue,
      amount: amountValue,
      image: imageValue,
    };

    await onSubmit(submitItem);
    setAmountValue(1);
    setTextValue("");
    setImageValue("");
    setNameValue("");
    modalTrigger();
  };

  return (
    <>
      <div className={styles.overlay} />
      <form onSubmit={onFormSubmit}>
        <input placeholder="Regalo" type="text" value={textValue} onChange={onTextChange} />
        <input placeholder="Destinatario" type="text" value={nameValue} onChange={onNameChange} />
        <input
          placeholder="URL de imagen"
          type="text"
          value={imageValue}
          onChange={onImageChange}
        />
        <input type="number" value={amountValue} onChange={onAmountChange} />
        <div className={styles["buttons-container"]}>
          <button onClick={() => modalTrigger()}>Cerrar</button>
          <button className="btnPrimary" type="submit">
            Guardar
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
