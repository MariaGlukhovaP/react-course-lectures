import classNames from "classnames";
import styles from "./progress-bar.module.css";
import { useProgress } from "./use-progress";
import { useTheme } from "../theme-context/use-theme";
import { useContext } from "react";
import { AuthContext } from "../layout/layout";

export const ProgressBar = ({
  viewVariant = "default",
  // colorViewVariant = "error | seccess",
  // theme = "dark | ligth",
}) => {
  const auth = useContext(AuthContext);
  console.log(auth);

  const { value } = useTheme();

  const progress = useProgress();

  return (
    <div
      className={classNames(styles.progressBar, {
        [styles.default]: viewVariant === "default",
        // [styles.colored]: viewVariant === "colored",
        [styles.light]: value === "light",
      })}
      style={{
        width: progress,
      }}
    />
  );
};
