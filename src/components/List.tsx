import {List, Avatar, IconButton, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ImageIcon from "@mui/icons-material/Image";
import EditIcon from "@mui/icons-material/Edit";
import {useSelector, useDispatch} from "react-redux";

import {modalActions} from "../store/modal";
import {listActions} from "../store/list";
import {GiftListItem} from "../models";

const GiftList = () => {
  const dispatch = useDispatch();
  const list = useSelector((state: any) => state.list.list);

  const editHandler = (index: number) => {
    dispatch(listActions.edit(index));
    dispatch(modalActions.open());
  };

  return (
    <List>
      {list.map((item: GiftListItem, index: number) => {
        return (
          <ListItem key={index}>
            <ListItemAvatar>
              <Avatar alt="" src={item.image}>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={`${item.gift} x${item.amount}`} secondary={item.name} />
            <IconButton
              aria-label="edit"
              color="primary"
              edge="end"
              sx={{marginRight: 0.3}}
              onClick={() => editHandler(index)}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              aria-label="delete"
              edge="end"
              onClick={() => dispatch(listActions.remove(index))}
            >
              <DeleteIcon />
            </IconButton>
          </ListItem>
        );
      })}
    </List>
  );
};

export default GiftList;
