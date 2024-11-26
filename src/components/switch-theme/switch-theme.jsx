import { useTheme } from "../theme-context/use-theme";

export const SwitchTheme = () => {
  const { theme, setTheme } = useTheme();

  const toggeleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    }
    setTheme("light");
  };

  return <button onClick={toggeleTheme}>Toggle Theme</button>;
};
