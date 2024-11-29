import styles from "./progress-bar.module.css";
import { useProgress } from "./use-progress";

export const ProgressBar = () => {
  const progress = useProgress();

  return (
    <div
      className={styles.progressBar}
      style={{
        width: progress,
      }}
    />
  );
};
