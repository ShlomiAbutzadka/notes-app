import { Note } from "../../models/note";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useAppDispatch } from "../../store/hooks";
import { selectNote } from "../../store/notes";

const NotesList: React.FC<{ items: Note[]; selected?: string }> = (props) => {
  const dispatch = useAppDispatch();
  const { items, selected } = props;

  const selectItemHandler = (id: string) => {
    dispatch(selectNote(id));
  };

  return (
    <List>
      {items.map((item: Note) => {
        return (
          <ListItem key={item.id} disablePadding>
            <ListItemButton
              selected={selected === item.id}
              onClick={() => selectItemHandler(item.id)}
            >
              <ListItemText primary={item.text || "(no text)"} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};

export default NotesList;
