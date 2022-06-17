import {useState} from "react";

import {Item} from "../../models";

import styles from "./Form.module.css";

const Form = ({
  onSubmit,
  closeForm,
  itemToEdit,
}: {
  onSubmit: (item: Item) => void;
  closeForm: (state: boolean) => void;
  itemToEdit: Item;
}) => {
  const [text, setText] = useState<string>(itemToEdit.text);
  const [name, setName] = useState<string>(itemToEdit.name);
  const [image, setImage] = useState<string>(itemToEdit.image);
  const [amount, setAmount] = useState<number>(itemToEdit.amount);

  const submitHandler = (e: any) => {
    e.preventDefault();
    onSubmit({text: text, name: name, image: image, amount: amount, id: Number(Math.random())});
  };

  return (
    <>
      <div className={styles.overlay} />
      <form className={styles.form} onSubmit={submitHandler}>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
        <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
        <button className="btn-primary">Agregar</button>
        <button type="button" onClick={() => closeForm(false)}>
          Cerrar
        </button>
      </form>
    </>
  );
};

export default Form;
