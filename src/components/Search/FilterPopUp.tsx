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
      {" "}
      <input
        type="text"
        className="input--location"
        onChange={handleLocationChange}
        placeholder="Location"
      />
      <label>
        <input
          type="checkbox"
          checked={fullTime}
          onChange={handleFullTimeChange}
          className="checkbox"
        />
        Full Time
      </label>
      <button type="submit">Search</button>
    </div>
  );
};
