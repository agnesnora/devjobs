import { FC, useState, ChangeEvent, FormEvent, useContext } from "react";
import { JobsData } from "../../../data";
import { filterJobs } from "../../utils";
import "./Search.style.css";
import { ThemeContext } from "../../App";

interface SearchProps {
  jobs: JobsData[];
  filteredJobs: JobsData[];
  setFilteredJobs: React.Dispatch<React.SetStateAction<JobsData[]>>;
}

export const Search: FC<SearchProps> = ({
  jobs,
  filteredJobs,
  setFilteredJobs,
}) => {
  const [positionQuery, setPositionQuery] = useState<string>("");
  const [locationQuery, setLocationQuery] = useState<string>("");
  const [fullTime, setFullTime] = useState<boolean>(false);
  const [isPopUpOn, setIsPopUpOn] = useState<boolean>(false);

  const themeContext = useContext(ThemeContext);

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPositionQuery(event.target.value);
  };

  const handleLocationChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLocationQuery(event.target.value);
  };

  const handleFullTimeChange = () => {
    setFullTime(!fullTime);
  };

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const filteredData = filterJobs(
      locationQuery,
      positionQuery,
      fullTime,
      jobs
    );
    setFilteredJobs(filteredData);
    isPopUpOn ? setIsPopUpOn(false) : null;
    console.log(filteredJobs);
  };
  const handleFilter = () => {
    setIsPopUpOn(true);
    console.log(isPopUpOn);
  };
  return (
    <div>
      {/* <form
        onSubmit={handleSearch}
        className={`form--container form--container--${
          themeContext?.theme === "light" ? "light" : "dark"
        }`}
      > */}{" "}
      {themeContext?.windowWidth ?? 1200 < themeContext?.screen.mobile ? (
        <form
          onSubmit={handleSearch}
          className={`form--container form--container--${
            themeContext?.theme === "light" ? "light" : "dark"
          }`}
        >
          <input
            type="text"
            className="input--title"
            onChange={handleTitleChange}
            placeholder="Filter by title"
          />
          <div>
            <img
              onClick={handleFilter}
              src="./assets/mobile/icon-filter.svg"
              style={{ width: "20px", height: "20px" }}
            />

            <button type="submit">Searchicon</button>
          </div>
        </form>
      ) : (
        <div>
          <input
            type="text"
            className="input--title"
            onChange={handleTitleChange}
            placeholder="Job title"
          />
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
            />
            Full Time
          </label>
          <button type="submit">Search</button>
        </div>
      )}
      {/* </form> */}
    </div>

    // {/* </div> */}
  );
};
