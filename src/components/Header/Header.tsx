import { FC, useContext } from "react";
import { ThemeContext } from "../../App";
import "./Header.style.css";
import Switch from "react-switch";

export const Header: FC = () => {
  const themeContext = useContext(ThemeContext);
  console.log("context", themeContext?.theme);
  const toggleTheme = () => {
    themeContext?.setTheme(themeContext?.theme === "light" ? "dark" : "light");
  };
  return (
    <header>
      <img src="/assets/desktop/logo.svg" />
      <div className="switch--wrapper">
        {" "}
        <img src="/assets/desktop/icon-sun.svg" />
        <Switch
          uncheckedIcon={false}
          checkedIcon={false}
          checked={themeContext?.theme === "dark"}
          onChange={toggleTheme}
          handleDiameter={15}
          onHandleColor={"#5964e0"}
          offHandleColor={"#5964e0"}
          onColor={"#ffffff"}
          offColor={"#ffffff"}
        />
        <img src="/assets/desktop/icon-moon.svg" />
      </div>
    </header>
  );
};
