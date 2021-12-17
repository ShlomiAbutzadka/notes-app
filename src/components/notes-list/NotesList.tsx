import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Note } from "../../models/note";
import { useAppDispatch } from "../../store/hooks";
import { selectNote } from "../../store/notes";
import styles from "./NotesList.module.css";

const NotesList: React.FC<{ items: Note[]; selected?: string }> = (props) => {
  const dispatch = useAppDispatch();
  const { items, selected } = props;

  const sortedItems = [...items].sort(
    (a: Note, b: Note) => (b.lastSave || 0) - (a.lastSave || 0)
  );

  const selectItemHandler = (id: string) => {
    dispatch(selectNote(id));
  };

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <List>
        {sortedItems.map((item: Note) => {
          return (
            <ListItem key={item.id} disablePadding className={styles.item}>
              <ListItemButton
                className={styles.item}
                selected={selected === item.id}
                onClick={() => selectItemHandler(item.id)}
              >
                <ListItemText
                  classes={{ primary: styles.itemText }}
                  primary={item.text || "(no text)"}
                  primaryTypographyProps={{
                    variant: "subtitle2",
                    noWrap: true,
                    style: {
                      whiteSpace: "pre",
                      maxLines: 1,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default NotesList;
