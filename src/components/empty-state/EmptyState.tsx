import styles from "./EmptyState.module.css";

const EmptyState: React.FC = (props) => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.svg} src="./assets/svg/empty-state.svg" />
      <span className={styles.title}>Empty in notes</span>
      <span className={styles.subtitle}>Please create a new note.</span>
    </div>
  );
};

export default EmptyState;
