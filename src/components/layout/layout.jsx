import { AuthContextProvider } from "../auth-context/auth-context";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { ProgressBar } from "../progress-bar/progress-bar";
import { ThemeContextProvider } from "../theme-context/theme-context";

export const Layout = ({ children }) => {
  return (
    <AuthContextProvider>
      <ThemeContextProvider>
        <div>
          <ProgressBar />
          <Header />
          {children}
          <Footer />
        </div>
      </ThemeContextProvider>
    </AuthContextProvider>
  );
};
