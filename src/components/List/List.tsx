import {ListItem} from "../../models";

import styles from "./List.module.css";

const List = ({
  list,
  removeItem,
  editItem,
}: {
  list: ListItem[];
  removeItem: (id: number) => void;
  editItem: (id: number) => void;
}) => {
  return (
    <ul className={styles.ul}>
      {list.map((item) => (
        <li key={item.id}>
          <img alt="" src={item.image} />
          <p>
            {item.text}
            <span>{item.name}</span>
          </p>
          ({item.amount})<button onClick={() => editItem(item.id)}>E</button>
          <button onClick={() => removeItem(item.id)}>X</button>
        </li>
      ))}
    </ul>
  );
};

export default List;
