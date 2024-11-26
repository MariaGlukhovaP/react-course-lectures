import { createContext } from "react";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { ProgressBar } from "../progress-bar/progress-bar";
import { ThemeContextProvider } from "../theme-context/theme-context";

export const AuthContext = createContext();

export const Layout = ({ children }) => {
  return (
    <AuthContext.Provider value={true}>
      <ThemeContextProvider>
        <div>
          <ProgressBar />
          <Header />
          {children}
          <Footer />
        </div>
      </ThemeContextProvider>
    </AuthContext.Provider>
  );
};
