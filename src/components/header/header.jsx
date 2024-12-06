import { useLocation } from "react-router-dom";
import { AuthButton } from "../auth-button/auth-button";
import { SwitchThemeButton } from "../switch-theme-button/switch-theme-button";
import { TabLink } from "../tab-link/tab-link";

export const Header = () => {
  const location = useLocation();

  return (
    <header>
      {location.pathname !== "/headphones" && (
        <TabLink to="/headphones" title="Headphones List" />
      )}
      <SwitchThemeButton />
      <AuthButton />
      header
    </header>
  );
};
