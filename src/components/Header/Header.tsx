import { FC, useContext } from "react";
import { ThemeContext } from "../../App";
import "./Header.style.css";

export const Header: FC = () => {
  const themeContext = useContext(ThemeContext);
  console.log("context", themeContext?.theme);
  const toggleTheme = () => {
    themeContext?.setTheme(themeContext?.theme === "light" ? "dark" : "light");
  };
  return (
    <header>
      <img src="/assets/desktop/logo.svg" />
      <button onClick={toggleTheme}>Day/Night</button>
    </header>
  );
};
