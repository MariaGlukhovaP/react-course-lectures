import { AuthButton } from "../auth-button/auth-button";
import { SwitchThemeButton } from "../switch-theme-button/switch-theme-button";

export const Header = () => {
  return (
    <header>
      <SwitchThemeButton />
      <AuthButton />
      header
    </header>
  );
};
