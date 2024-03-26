import { FC, ChangeEvent, useContext } from "react";
import "./Search.style.scss";
import { ThemeContext } from "../../App";
interface FilterPopUpProps {
  handleLocationChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleFullTimeChange: () => void;
  fullTime: boolean;
}

export const FilterPopUp: FC<FilterPopUpProps> = ({
  handleLocationChange,
  handleFullTimeChange,
  fullTime,
}) => {
  const themeContext = useContext(ThemeContext);
  return (
    <div
      className="popUp"
      style={{
        backgroundColor: themeContext?.theme === "dark" ? "#19202D" : "#fff",
      }}
    >
      <div className="icon--input--wrapper">
        <img src="./assets/desktop/icon-location.svg" />{" "}
        <input
          type="text"
          className="input--location"
          onChange={handleLocationChange}
          placeholder="Filter by location"
        />
      </div>
      <div className="checkbox--label--wrapper">
        <input
          type="checkbox"
          checked={fullTime}
          onChange={handleFullTimeChange}
          className="checkbox"
        />{" "}
        <label
          style={{
            color: themeContext?.theme === "dark" ? "#979797" : "#19202D",
          }}
        >
          Full Time Only
        </label>{" "}
      </div>

      <button type="submit">Search</button>
    </div>
  );
};
