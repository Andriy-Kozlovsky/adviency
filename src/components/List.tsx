import {ListItems} from "../models";

import styles from "./List.module.css";

const List = ({
  list,
  removeItem,
  setEditIndex,
}: {
  setEditIndex: (i: number) => void;
  removeItem: (i: number) => void;
  list: ListItems[];
}) => {
  return (
    <ul className={styles.list}>
      {list.map((item, index) => (
        <li key={index}>
          <img src={item.image} />
          <div>
            {item.text} {item.name}
          </div>
          <button className={styles["btns-container"]} onClick={() => setEditIndex(index)}>
            E
          </button>
          <button onClick={() => removeItem(index)}>X</button>
        </li>
      ))}
    </ul>
  );
};

export default List;
