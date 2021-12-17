import { RefObject, useCallback, useEffect, useRef, useState } from "react";
import { Note } from "../../models/note";
import { useAppDispatch } from "../../store/hooks";
import { updateNote } from "../../store/notes";
import { updateNotification } from "../../store/UI";
import styles from "./Content.module.css";

const AUTOSAVE_INTERVAL = 2000;
const LAST_SAVE_INTERVAL = 1000;

const Content: React.FC<{ note: Note }> = (props) => {
  const { note } = props;
  const [text, updateText] = useState(note.text);
  const [dirty, setDirty] = useState(false);
  const textareaRef: RefObject<HTMLTextAreaElement> = useRef<HTMLTextAreaElement>(
    null
  );

  const dispatch = useAppDispatch();

  const save = useCallback(() => {
    const updatedText: string = text || "";
    const updatedNote: Note = {
      ...note,
      text: updatedText,
    };
    dispatch(updateNote(updatedNote));
  }, [note, text, dispatch]);

  const secondsAgo = (ms: number) => {
    return Math.round(new Date().getTime() / 1000) - Math.round(ms / 1000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      note.lastSave &&
        dispatch(
          updateNotification(
            `Last saved ${secondsAgo(note.lastSave!)} seconds ago`
          )
        );
    }, LAST_SAVE_INTERVAL);
    return () => clearInterval(interval);
  }, [note.lastSave, dispatch]);

  useEffect(() => {
    if (!dirty) return;
    const timer = setTimeout(() => {
      save();
    }, AUTOSAVE_INTERVAL);
    return () => clearTimeout(timer);
  }, [dirty, save]);

  useEffect(() => {
    updateText(note.text);
    textareaRef.current!.focus();

    return () => setDirty(false);
  }, [note.id, note.text]);

  const onBlurHandler = () => {
    if (!dirty) return;
    save();
  };

  const onChangeHandler = () => {
    const text = textareaRef.current!.value;
    updateText(text);
    setDirty(true);
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
