import {ListItem} from "../../models";

import styles from "./List.module.css";

const List = ({list, onRemoveItem}: {list: ListItem[]; onRemoveItem: (i: number) => void}) => {
  if (list.length === 0) return <p className={styles.emptyList}>Agregá regalos!</p>;

  return (
    <ul className={styles.ul}>
      {list.map((item, index) => (
        <li key={index} className={styles.li}>
          <img alt="" src={item.image} />
          <div>
            <p>
              {item.text} ({item.amount})
            </p>
            <span>{item.name}</span>
          </div>
          <button onClick={() => onRemoveItem(index)}>X</button>
        </li>
      ))}
    </ul>
  );
};

export default List;
