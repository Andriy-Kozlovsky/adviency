import {Item} from "../../models";

import styles from "./List.module.css";

const ListItem = ({
  item,
  removeItem,
  editItem,
}: {
  item: Item;
  removeItem: (id: number) => void;
  editItem: (id: number) => void;
}) => {
  return (
    <li>
      <img alt="" src={item.image} />
      <p className={styles["text-container"]}>
        {item.text}
        <span>{item.name}</span>
      </p>
      ({item.amount})
      <div className={styles["buttons-container"]}>
        <button onClick={() => editItem(item.id)}>E</button>
        <button onClick={() => removeItem(item.id)}>X</button>
      </div>
    </li>
  );
};

export default ListItem;
