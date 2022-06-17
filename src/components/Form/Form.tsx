import {ListItem} from "../../models";
import useForm from "../../hooks/use-form";

import styles from "./Form.module.css";

const Form = ({sendObj}: {sendObj: (obj: ListItem) => void}) => {
  const {text, name, image, amount, onChange} = useForm();

  const submitHandler = (e: any) => {
    e.preventDefault();
    sendObj({
      text,
      name,
      image,
      amount,
      id: Math.random(),
    });
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <input type="text" value={text} onChange={(e) => onChange(e.target.value, "text")} />
      <input type="text" value={name} onChange={(e) => onChange(e.target.value, "name")} />
      <input type="text" value={image} onChange={(e) => onChange(e.target.value, "image")} />
      <input
        type="number"
        value={amount}
        onChange={(e) => onChange(e.target.value.toString(), "amount")}
      />
      <div>
        <button type="button">Cerrar</button>
        <button className="btn-primary" type="submit">
          Guardar
        </button>
      </div>
    </form>
  );
};

export default Form;
