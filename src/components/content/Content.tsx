import { RefObject, useEffect, useRef, useState } from "react";
import { Note } from "../../models/note";
import { useAppDispatch } from "../../store/hooks";
import notes, { updateNote } from "../../store/notes";
import { updateNotification } from "../../store/UI";
import styles from "./Content.module.css";

const AUTOSAVE_INTERVAL = 2000;
const LAST_SAVE_INTERVAL = 1000;

const Content: React.FC<{ note: Note }> = (props) => {
  const { note } = props;
  const [text, updateText] = useState(note.text);
  const textareaRef: RefObject<HTMLTextAreaElement> = useRef<HTMLTextAreaElement>(
    null
  );

  const dispatch = useAppDispatch();

  const save = () => {
    const updatedText: string = text || "";
    const updatedNote: Note = {
      ...note,
      text: updatedText,
    };
    dispatch(updateNote(updatedNote));
  };

  const secondsAgo = (ms: number) => {
    return Math.round(new Date().getTime() / 1000) - Math.round(ms / 1000);
  };

  const updateLastSaved = (message: string) => {
    dispatch(updateNotification(message));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      note.lastSave &&
        updateLastSaved(`Last saved ${secondsAgo(note.lastSave!)} seconds ago`);
    }, LAST_SAVE_INTERVAL);
    return () => clearInterval(interval);
  }, [note.lastSave]);

  useEffect(() => {
    if (!text && !note.text) return;
    const timer = setTimeout(() => {
      save();
    }, AUTOSAVE_INTERVAL);
    return () => clearTimeout(timer);
  }, [text]);

  useEffect(() => {
    updateText(note.text);
    textareaRef.current!.focus();

  }, [note.id]);

  const onBlurHandler = () => {
    save();
  };

  const onChangeHandler = () => {
    const text = textareaRef.current!.value;
    updateText(text);
  };

  return (
    <div className={styles.content}>
      <textarea
        ref={textareaRef}
        className={styles.textarea}
        onBlur={onBlurHandler}
        onChange={onChangeHandler}
        value={text}
      ></textarea>
    </div>
  );
};

export default Content;
