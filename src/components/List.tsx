import {Avatar, IconButton, List, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ImageIcon from "@mui/icons-material/Image";
import EditIcon from "@mui/icons-material/Edit";
import {red} from "@mui/material/colors";

const GiftList = () => {
  return (
    <List>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt="" src="" sx={{bgcolor: red[500]}}>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Medias" secondary="Julia" />
        <IconButton aria-label="edit" color="primary" edge="end" sx={{marginRight: 0.3}}>
          <EditIcon />
        </IconButton>
        <IconButton aria-label="delete" edge="end">
          <DeleteIcon />
        </IconButton>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt="" src="" sx={{bgcolor: red[500]}}>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Vitel Tone" secondary="Carlos" />
        <IconButton aria-label="edit" color="primary" edge="end" sx={{marginRight: 0.3}}>
          <EditIcon />
        </IconButton>
        <IconButton aria-label="delete" edge="end">
          <DeleteIcon />
        </IconButton>
      </ListItem>
    </List>
  );
};

export default GiftList;
