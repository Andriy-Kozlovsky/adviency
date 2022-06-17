import {Item} from "../../models";

import styles from "./List.module.css";
import ListItem from "./ListItem";

const List = ({
  list,
  removeItem,
  editItem,
}: {
  list: Item[];
  removeItem: (id: number) => void;
  editItem: (id: number) => void;
}) => {
  return (
    <ul className={styles.list}>
      {list.map((item) => (
        <ListItem key={item.id} editItem={editItem} item={item} removeItem={removeItem} />
      ))}
    </ul>
  );
};

export default List;
