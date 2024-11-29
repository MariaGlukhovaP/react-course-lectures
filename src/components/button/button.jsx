import classNames from "classnames";
import { useTheme } from "../theme-context/use-theme";

import styles from "./button.module.css";

export const Button = ({
  children,
  onClick,
  className,
  viewVariant = "default",
}) => {
  const { value } = useTheme();

  return (
    <button
      className={classNames(styles.root, className, {
        [styles.default]: viewVariant === "default",
        [styles.big]: viewVariant === "big",
        [styles.dark]: value === "dark",
        [styles.light]: value === "light",
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
