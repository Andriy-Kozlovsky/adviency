import {useState} from "react";

import {ListItems} from "../models";

import styles from "./Form.module.css";

const Form = ({
  onSubmit,
  openForm,
  list,
  editIndex,
  resetEditIndex,
}: {
  editIndex: number;
  openForm: () => void;
  onSubmit: (items: ListItems) => void;
  list: ListItems[];
  resetEditIndex: () => void;
}) => {
  const [text, setText] = useState(editIndex >= 0 ? list[editIndex].text : "");
  const [name, setName] = useState(editIndex >= 0 ? list[editIndex].name : "");
  const [image, setImage] = useState(editIndex >= 0 ? list[editIndex].image : "");
  const [amount, setAmount] = useState(editIndex >= 0 ? list[editIndex].amount : 1);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const filterRepeated = list.filter((item) => item.text === text);

    if (filterRepeated.length > 0 || text === "") return;
    await onSubmit({text, name, image, amount});
    openForm();
    setText("");
    setName("");
    setImage("");
    setAmount(1);
    resetEditIndex();
  };

  const textChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const nameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const imageChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImage(e.target.value);
  };

  const amountChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const amount = Number(e.target.value);

    if (amount < 1) return;
    setAmount(amount);
  };

  return (
    <>
      <div className={styles.overlay} />
      <form className={styles.form} onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={(e) => textChangeHandler(e)} />
        <input type="text" value={name} onChange={(e) => nameChangeHandler(e)} />
        <input type="text" value={image} onChange={(e) => imageChangeHandler(e)} />
        <input type="number" value={amount} onChange={(e) => amountChangeHandler(e)} />
        <div className={styles.btns}>
          <button
            onClick={() => {
              openForm();
              resetEditIndex();
            }}
          >
            Cerrar
          </button>
          <button className="btnPrimary" type="submit">
            Guardar
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
