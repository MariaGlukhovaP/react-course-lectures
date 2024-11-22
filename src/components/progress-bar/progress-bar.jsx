import classNames from "classnames";
import styles from "./progress-bar.module.css";
import { useProgress } from "./use-progress";

export const ProgressBar = ({ viewVariant = "default" }) => {
  const progress = useProgress();

  return (
    <div
      className={classNames(styles.progressBar, {
        [styles.default]: viewVariant === "default",
        [styles.colored]: viewVariant === "colored",
      })}
      style={{
        width: progress,
      }}
    />
  );
};
