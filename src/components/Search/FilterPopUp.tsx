import { FC, ChangeEvent } from "react";
import "./Search.style.scss";
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
  return (
    <div className="popUp">
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
        <label>Full Time Only</label>{" "}
      </div>
      {/* <label>
        <input
          type="checkbox"
          checked={fullTime}
          onChange={handleFullTimeChange}
          className="checkbox"
        />
        Full Time
      </label> */}
      <button type="submit">Search</button>
    </div>
  );
};
