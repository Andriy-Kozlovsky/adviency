import {FormProps} from "../../models";

import styles from "./Form.module.css";

const Form = ({
  onFormSubmit,
  inputText,
  inputImage,
  inputAmount,
  onTextChange,
  onImageChange,
  onAmountChange,
  openForm,
  openFormHandler,
}: FormProps) => {
  if (!openForm) return null;

  return (
    <>
      <div className={styles.overlay} />
      <form className={styles.form} onSubmit={onFormSubmit}>
        <input
          name="text"
          placeholder="Ingresá un regalo"
          type="text"
          value={inputText}
          onChange={(e) => onTextChange(e)}
        />
        <input
          name="image"
          placeholder="Ingresá la ruta de la imagen"
          type="text"
          value={inputImage}
          onChange={(e) => onImageChange(e)}
        />
        <input name="text" type="number" value={inputAmount} onChange={(e) => onAmountChange(e)} />
        <div className={styles["btn-container"]}>
          <button className="btnSecond" onClick={openFormHandler}>
            Cerrar
          </button>
          <button className="btnAction" type="submit">
            Agregar
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
