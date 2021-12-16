import styles from "./Layout.module.css";
import Header from "../header/Header";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Note } from "../../models/note";
import Content from "../content/Content";

const Layout: React.FC<{ items: Note[]; selected: Note }> = (props) => {
  const { items, selected } = props;
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.sidebar}>
          <List>
            {items.map((item) => {
              return (
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </div>
        <div className={styles.content}>
          <Content selectedNote={selected}/>
        </div>
      </div>
    </>
  );
};

export default Layout;
