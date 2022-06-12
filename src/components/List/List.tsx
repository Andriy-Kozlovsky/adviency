import {ListProps} from "../../models";

import styles from "./List.module.css";

const message = <p>Agregá regalos!</p>;

const List = ({list, onRemoveItem, onRemoveAllItems}: ListProps) => {
  if (!list) return message;

  return (
    <>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            <img alt="" className={styles.img} src={item.image} />
            {item.text} x{item.amount}
            <button className={`btnSecond ${styles.btnClose}`} onClick={() => onRemoveItem(index)}>
              X
            </button>
          </li>
        ))}
      </ul>
      {list.length > 1 && (
        <button className="btnSecond" onClick={onRemoveAllItems}>
          Borrar todo
        </button>
      )}
    </>
  );
};

export default List;
