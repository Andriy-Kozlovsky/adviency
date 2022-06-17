import {ListItem} from "../../models";

import styles from "./List.module.css";

const List = ({list}: {list: ListItem[]}) => {
  return (
    <ul className={styles.ul}>
      {list.map((item) => (
        <li key={item.id}>
          <img alt="" src={item.image} />
          <p>
            {item.text}
            <span>{item.name}</span>
          </p>
          ({item.amount})<button>E</button>
          <button>X</button>
        </li>
      ))}
    </ul>
  );
};

export default List;
