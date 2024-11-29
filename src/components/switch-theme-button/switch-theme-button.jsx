import { Button } from "../button/button";
import { useTheme } from "../theme-context/use-theme";

export const SwitchThemeButton = () => {
  const { value, toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme}>
      {value === "light" ? "Switch to dark" : "Switch to light"}
    </Button>
  );
};
