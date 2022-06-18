import {ListItem} from "../../models";
import useFormInputs from "../../hooks/use-form-inputs";

import styles from "./Form.module.css";

const Form = ({
  sendObj,
  itemToEdit,
  resetItemToEdit,
}: {
  sendObj: (obj: ListItem) => void;
  itemToEdit: ListItem;
  resetItemToEdit: () => void;
}) => {
  const {text, name, image, amount, onChange, resetValues} = useFormInputs(itemToEdit);

  const submitHandler = (e: any) => {
    e.preventDefault();
    if (e.target.localName === "button") {
      sendObj({text: "", name: "", image: "", amount: 1, id: 0});
    } else {
      sendObj({
        text,
        name,
        image,
        amount,
        id: Math.random(),
      });
    }
    resetItemToEdit();
    resetValues();
  };

  return (
    <>
      <div className={styles.overlay} />
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
          <button type="button" onClick={(e) => submitHandler(e)}>
            Cerrar
          </button>
          <button className="btn-primary" type="submit">
            Guardar
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
